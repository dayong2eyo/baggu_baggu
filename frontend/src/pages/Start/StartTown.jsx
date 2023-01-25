import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// icons
import locationIcon from '../../assets/icons/location.svg';

// components
import TopBar2 from 'components/common/TopBar2';
import FormSubmitBtn from 'components/common/FormSubmitBtn';

// hooks
import GetCurrentPosition from 'hooks/GetCurrentPosition';

// styled component
const Wrapper = styled.div`
  ${tw`w-full h-full border-0 flex flex-col text-[26px]`}
`;

const TextContainer = styled.div`
  ${tw`flex-col p-4 pb-2`}

  & {
    span {
      ${tw`font-extrabold text-primary`}
    }
  }
`;

const InputContainer = styled.div`
  ${tw`flex-col pt-2 pb-2 px-4`}

  & {
    input {
      ${tw`w-full rounded-lg mb-1`}
      ${props =>
        props.isValid
          ? tw`focus:outline focus:outline-primary`
          : tw`focus:outline focus:outline-negative`}
    }
    p {
      ${tw`text-negative text-tiny`}
    }
  }
`;

const BtnContainer = styled.div`
  ${tw`flex pt-2 pb-2 px-4 fixed bottom-0 w-full`}
`;

const Btn = styled.div`
  ${tw`flex justify-center items-center rounded-full w-full h-5 bg-white border border-grey3 mb-1`}
`;

const Btn2 = styled(Btn)`
  ${tw`bg-success`}
`;

function StartTown() {
  const [town, setTown] = useState('');

  const navigate = useNavigate();

  const getPositionHandler = () => {
    const location = GetCurrentPosition();
    console.log(location);
  };
  const clickHandler = () => {
    // {nickname : nickname}으로 중앙저장소에 저장
    // if (isValid) {
    //   console.log({ nickname: nickname });
    //   navigate('/start/town');
    // }
  };
  return (
    <Wrapper>
      <TopBar2 pageTitle="" />
      <TextContainer>
        <p>
          <span>'닉네임'</span>님의
          <br /> 동네를 설정해주세요.
        </p>
      </TextContainer>
      <InputContainer>
        <Btn>
          <span></span>
        </Btn>
        <Btn2 onClick={getPositionHandler}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-black"
              d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
              fill="none"
            />
          </svg>
          <span className="text-main">현재 위치로 동네 설정하기</span>
        </Btn2>
      </InputContainer>
      <BtnContainer>
        <FormSubmitBtn
          //   disabled={isValid ? false : true}
          onClick={clickHandler}
        />
      </BtnContainer>
    </Wrapper>
  );
}

export default StartTown;