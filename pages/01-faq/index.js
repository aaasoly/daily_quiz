import { Container, Search, Header, Title, Profile, UserName, ArrowR, Menu, MenuOff, MenuOn, DivideLine, Body, QNo, Question, Footer, MenuIcon, Icon, FMenuName, FMenuOff, FMenuOn, ArrowD} from '../../../styles/01-faq'


export default function EatsRoad() {




  // 여기는 자바스크립트 쓰는 곳

  return (
    <Container>
      <Search src="/search.png"></Search>
      <Header>
        <Title>마이</Title>
        <Profile src="/profile.png"></Profile>
        <UserName>임정아</UserName>
        <ArrowR src="/arrowR.png"></ArrowR>
      </Header>

      <Menu>
        <MenuOff>공지사항</MenuOff>
        <MenuOff>이벤트</MenuOff>
        <MenuOn>FAQ</MenuOn>
        <MenuOff>Q&A</MenuOff>
      </Menu>

      <DivideLine></DivideLine>

      <Body>
        <QNo>Q.01</QNo>
        <Question>리뷰 작성은 어떻게 하나요? <ArrowD src="/arrowD.png"></ArrowD></Question>
        <QNo>Q.02</QNo>
        <Question>리뷰 수정/삭제는 어떻게 하나요? <ArrowD src="/arrowD.png"></ArrowD></Question>
        
        <QNo>Q.03</QNo>
        <Question>아이디/비밀번호를 잊어버렸어요. <ArrowD src="/arrowD.png"></ArrowD></Question>
        
        <QNo>Q.04</QNo>
        <Question>회원탈퇴를 하고싶어요. <ArrowD src="/arrowD.png"></ArrowD></Question>
        
        <QNo>Q.05</QNo>
        <Question>출발지 설정은 어떻게 하나요? <ArrowD src="/arrowD.png"></ArrowD></Question>
        
        <QNo>Q.06</QNo>
        <Question>비밀번호를 변경하고 싶어요. <ArrowD src="/arrowD.png"></ArrowD></Question>
      </Body>

      <DivideLine></DivideLine>

      <Footer>
        <MenuIcon>
          <Icon src="/home.png"></Icon>
          <Icon src="/road.png"></Icon>
          <Icon src="/like.png"></Icon>
          <Icon src="/my.png"></Icon>
        </MenuIcon>

        <FMenuName>
          <FMenuOff>홈</FMenuOff>
          <FMenuOff>잇츠로드</FMenuOff>
          <FMenuOff>마이찜</FMenuOff>
          <FMenuOn>마이</FMenuOn>
        </FMenuName>
        
      </Footer>

    </Container>
  )
}