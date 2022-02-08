import {
  BuyFormContainer,
  BuyFormWarper,
  BuyFormLogo,
  BuyFormDivider,
  BuyFormLogoContainer,
  BuyFormFormContainer,
  BuyFormInputContainer,
  BuyFormForm,
  BuyFormInputTitle,
  BuyFormInput,
  TicketsContainer,
  FormGlobalContainer,
} from "./styled";
import { CardBuyButton } from "../Tickets/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import LogoPath from "../../assets/logo.png";
import axios from "axios";
import { useState } from "react";
type Inputs = {
  name: string;
  cep: string;
  uf: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
};
const BuyForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const [controlCep, setControlCep] = useState<boolean>(false);
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));
  function onBlurcep() {
    const value = getValues("cep");
    console.log(value);
    const cep = value?.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    } else {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        const info = response.data;
        setValue("uf", info.uf);
        setValue("city", info.localidade);
        setValue("neighborhood", info.bairro);
        setValue("street", info.logradouro);
        setControlCep(true);
      });
    }
  }
  return (
    <BuyFormContainer>
      <BuyFormWarper>
        <BuyFormLogo src={LogoPath} />
        <BuyFormLogoContainer></BuyFormLogoContainer>
        <BuyFormDivider />
        <FormGlobalContainer>
          <BuyFormFormContainer>
            <BuyFormForm onSubmit={handleSubmit(onSubmit)}>
              <BuyFormInputContainer>
                <BuyFormInputTitle>Nome Completo:</BuyFormInputTitle>
                <BuyFormInput {...register("name", { required: true })} />
              </BuyFormInputContainer>
              <BuyFormInputContainer>
                <BuyFormInputTitle>Cep:</BuyFormInputTitle>
                <BuyFormInput
                  {...register("cep", {
                    required: true,
                    onBlur: (e) => onBlurcep(),
                  })}
                />
              </BuyFormInputContainer>
              <BuyFormInputContainer>
                <BuyFormInputTitle>Estado:</BuyFormInputTitle>
                <BuyFormInput
                  {...register("uf", { required: true, disabled: controlCep })}
                />
              </BuyFormInputContainer>
              <BuyFormInputContainer>
                <BuyFormInputTitle>Cidade:</BuyFormInputTitle>
                <BuyFormInput
                  {...register("city", {
                    required: true,
                    disabled: controlCep,
                  })}
                />
              </BuyFormInputContainer>
              <BuyFormInputContainer>
                <BuyFormInputTitle>Bairro:</BuyFormInputTitle>
                <BuyFormInput
                  {...register("neighborhood", {
                    required: true,
                    disabled: controlCep,
                  })}
                />
              </BuyFormInputContainer>
              <BuyFormInputContainer>
                <BuyFormInputTitle>Rua:</BuyFormInputTitle>
                <BuyFormInput
                  {...register("street", {
                    required: true,
                    disabled: controlCep,
                  })}
                />
              </BuyFormInputContainer>
              <BuyFormInputContainer>
                <BuyFormInputTitle>Numero:</BuyFormInputTitle>
                <BuyFormInput {...register("number", { required: true })} />
              </BuyFormInputContainer>
              <BuyFormInputContainer>
                <BuyFormInputTitle>Complemento:</BuyFormInputTitle>
                <BuyFormInput {...register("complement", { required: true })} />
              </BuyFormInputContainer>
              <CardBuyButton type="submit">Comprar</CardBuyButton>
            </BuyFormForm>
          </BuyFormFormContainer>
          <TicketsContainer></TicketsContainer>
        </FormGlobalContainer>
      </BuyFormWarper>
    </BuyFormContainer>
  );
};
export default BuyForm;
