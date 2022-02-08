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
  TicketsWarper,
  TicketsTitle,
  TicketsTitleContainer,
  TicketsDivider,
  TicketsBodyTextContainer,
  TicketsBodyTextWarper,
  YesAnotherDivider,
  TicketsButtonsContainer,
  TicketButtonsWarper,
  CardAmoutButtonText,
} from "./styled";
import {
  CardBuyButton,
  CardAmountButtons,
  CardAmountButtonsText,
} from "../Tickets/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import LogoPath from "../../assets/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [halfConter, SetHalfConter] = useState<number>(0);
  const [Conter, SetConter] = useState<number>(0);
  const params = useParams();
  useEffect(() => {
    if (params?.half) {
      SetHalfConter(parseInt(params.half));
    }
    if (params?.normal) {
      SetConter(parseInt(params.normal));
    }
  }, []);
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));
  const HanddleCounter = (operation: number) => {
    if (operation == -1 && Conter == 0) {
      return;
    }
    SetConter(Conter + operation);
  };
  const HanddleHalfCounter = (operation: number) => {
    if (operation == -1 && halfConter == 0) {
      return;
    }
    SetHalfConter(halfConter + operation);
  };
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
              <CardBuyButton type="submit">
                <TicketsTitle>Comprar</TicketsTitle>
              </CardBuyButton>
            </BuyFormForm>
          </BuyFormFormContainer>
          <TicketsContainer>
            <TicketsWarper>
              <TicketsTitleContainer>
                <TicketsTitle>1 Ingresso</TicketsTitle>
              </TicketsTitleContainer>
              <TicketsDivider />
              <TicketsBodyTextContainer>
                <TicketsBodyTextWarper>
                  <TicketsTitle>Meia Entrada</TicketsTitle>
                </TicketsBodyTextWarper>
                <YesAnotherDivider />
                <TicketsBodyTextWarper>
                  <TicketsTitle>R$:60,00</TicketsTitle>
                </TicketsBodyTextWarper>
              </TicketsBodyTextContainer>
              <TicketsButtonsContainer>
                <TicketButtonsWarper>
                  <CardAmountButtons>
                    <CardAmoutButtonText onClick={() => HanddleHalfCounter(-1)}>
                      -
                    </CardAmoutButtonText>
                  </CardAmountButtons>
                  <TicketsTitle>{halfConter}</TicketsTitle>
                  <CardAmountButtons>
                    <CardAmountButtonsText
                      onClick={() => HanddleHalfCounter(1)}
                    >
                      +
                    </CardAmountButtonsText>
                  </CardAmountButtons>
                </TicketButtonsWarper>
              </TicketsButtonsContainer>
            </TicketsWarper>
            <TicketsWarper>
              <TicketsTitleContainer>
                <TicketsTitle>1 Ingresso</TicketsTitle>
              </TicketsTitleContainer>
              <TicketsDivider />
              <TicketsBodyTextContainer>
                <TicketsBodyTextWarper>
                  <TicketsTitle>Entrada</TicketsTitle>
                </TicketsBodyTextWarper>
                <YesAnotherDivider />
                <TicketsBodyTextWarper>
                  <TicketsTitle>R$:120,00</TicketsTitle>
                </TicketsBodyTextWarper>
              </TicketsBodyTextContainer>
              <TicketsButtonsContainer>
                <TicketButtonsWarper>
                  <CardAmountButtons>
                    <CardAmoutButtonText onClick={() => HanddleCounter(-1)}>
                      -
                    </CardAmoutButtonText>
                  </CardAmountButtons>
                  <TicketsTitle>{Conter}</TicketsTitle>
                  <CardAmountButtons>
                    <CardAmountButtonsText onClick={() => HanddleCounter(1)}>
                      +
                    </CardAmountButtonsText>
                  </CardAmountButtons>
                </TicketButtonsWarper>
              </TicketsButtonsContainer>
            </TicketsWarper>
          </TicketsContainer>
        </FormGlobalContainer>
      </BuyFormWarper>
    </BuyFormContainer>
  );
};
export default BuyForm;
