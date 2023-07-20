import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { images } from "./images";
import IconButton from "./components/IconButton";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 20px;
  /*align-items: center;*/
  justify-content: flex-start;
`;

const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
`;

const TitlesongContainer = styled.TouchableOpacity`
  width: 93%;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  flex-direction: row;
`;

const SoneInfoContainer = styled.View`
  flex-direction: column;
  margin-left: 8px;
  padding: 20px;
`;

const SongTitle = styled.Text`
  color: #000000;
  font-weight: 700;
  font-size: 26px;
  margin-top: 8px;
`;

const SongComposer = styled.Text`
  color: #7f7f7f;
  margin-top: 8px;
`;
const TitleImg = styled.Image`
  border-radius: 15px;
  width: 120px;
  height: 120px;
  object-fit: cover;
  justify-content: flex-start;
`;

const Type = styled.Text`
  font-size: 18px;
  color: #6635fa;
  font-weight: 600;
`;
const SubTitle = styled.Text`
  font-size: 22px;
  color: #6635fa;
  margin-top: 10px;
  font-weight: 600;
`;
// const MainsongsListContainer = styled.View`
//   width: 90%;
// `;
const MainsongsList = styled.Image`
  width: 93%;
  height: 230px;
  margin-top: 0px;
  margin-bottom: 20px;
  object-fit: contain;
`;

const Explanation = styled.Text`
  color: #7f7f7f;
  line-height: 20px;
  font-weight: 700;
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 16px;
`;

const ExplanationContainer = styled.TouchableOpacity`
  width: 93%;
  border-radius: 5px;
  margin-top: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  flex-direction: row;
`;

const ExplanationImg = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const Tab = styled.Image`
  width: 100%;
  height: 90px;
  margin-top: 0px;
  margin-bottom: 20px;
  object-fit: contain;
  align-self: flex-end;
`;

const App = () => {
  return (
    <>
      <Container>
        <Title>매너모드로 느끼는 멜로디{"\n"}매너로디입니다</Title>
        <SubTitle>오늘은 이 음악 어떤가요?</SubTitle>
        <TitlesongContainer>
          <TitleImg source={require("../assets/images/iam_album_img.jpg")} />
          <SoneInfoContainer>
            <Type>경쾌한</Type>
            <SongTitle>IAM</SongTitle>
            <SongComposer>김윤희 작사 / 김윤희 작곡</SongComposer>
          </SoneInfoContainer>
        </TitlesongContainer>
        <SubTitle>최근 들은 노래</SubTitle>
        {/* <MainsongsListContainer> */}
        <MainsongsList source={require("../assets/images/main_img.png")} />
        {/* </MainsongsListContainer> */}

        {/* <IconButton type={images.unlike} /> */}
        <ExplanationContainer>
          <ExplanationImg source={require("../assets/images/expla_img.png")} />
          <Explanation>
            음의 높낮이에 따라 음악을 느낄 수 있는 {"\n"}매너로디의 5가지의
            진동을 체험해보세요
          </Explanation>
        </ExplanationContainer>
      </Container>
      <Tab source={require("../assets/images/tab_bar.png")} />
    </>
  );
};

export default App;
