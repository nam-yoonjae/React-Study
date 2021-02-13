import React, {useState} from 'react';
import Input from "@material-ui/core/Input";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormLabel from "@material-ui/core/FormLabel";

const App = () => {
  const [name, setName] = useState();
  const [jumin, setJumin] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [marry, setMarry] = useState(false);
  const [hobby, setHobby] = useState("선택");
  const [date, setDate] = useState();
  const [isPlusJumin, setIsPlusJumin] = useState(true);
  const [isPlusPhone, setIsPlusPhone] = useState(true);


  const setNameText = e => {
    setName(e.target.value);
  };
  const setJuminText = e => {
    if(e.target.value.length === 15) {
      return;
    }
    if(
      (e.target.value.length === 6 && isPlusJumin) ||
      (e.target.value.length === 7 && !e.target.value.include("-"))
    ){
      setJumin(
        e.target.value.substring(0, 6) + "-" + e.target.value.substring(6)
      );
      setIsPlusJumin(false);
    } else {
      if(e.target.value.length < 6 ) {
        setIsPlusJumin(true);
      }
      setJumin(e.target.value);
    }
  };

  const setPhoneNumText = e => {
    if(e.target.value.length === 14 ) {
      return;
    }
    console.log(e.target.value);
    console.log(e.target.value.length);
    console.log(isPlusPhone);

    if(e.target.value.length < 3) {
      setIsPlusPhone(true);
    }
    if(e.target.value.length === 3 && isPlusPhone) {
      setPhoneNum(e.target.value + "-");
      setIsPlusPhone(false);
    } else if (e.target.value.length === 4 && !e.target.value.include("-")){
      setPhoneNum(
        e.target.value.substring(0,3) + "-" + e.target.value.substring(3)
      );
    } else if (e.target.value.length === 8 ){
      if(e.target.value.match(/-/g).length === 1 && isPlusPhone){
        setPhoneNum(e.target.value);
        setIsPlusPhone(false);
      } else {
        setPhoneNum(e.target.value+"-");
        setIsPlusPhone(true);
      }
    } else if (e.target.value.length === 9 && !isPlusPhone){
      setPhoneNum(
        e.target.value.substring(0,8) + "-" + e.target.value.substring(8)
      );
    } else {
      setPhoneNum(e.target.value);
    }
  };

  const setMarryText = e => {
    setMarry(e.target.value);
  };
  const setHobbyText = e => {
    setHobby(e.target.value);
  };
  const setDateText = e => {
    setDate(e.target.value);
  };
  const save = e => {
    e.preventDefault();
    const isKorean = /[A-Za-z0-9]/;
    const isNumber = /[0-9]/;
    const isPhoneNumber = /[]/;

    if(isKorean.test(name)){
      alert("이름을 다시 확인하세요.");
    } else if (!isNumber.test(jumin) || jumin.length !== 14) {
      alert("주민등록번호를 (-)를 포함하여 입력해주세요. \n ex)891107-1065418");
    } else if (!isNumber.test(phoneNum) || phoneNum.length !== 13) {
      alert("휴대폰 번호를 (-)를 포함하여 입력해주세요. \n ex)010-1234-5678");
    }

  };



  return (
    <>
      <div className="App">
        <form onSubmit={save}>
          <FormLabel htmlFor="name">이름</FormLabel>
          <Input 
            name="name"
            id="name"
            placeholder="홍길동"
            onChange={setNameText}
          />
          <br/>
          <FormLabel htmlFor="jumin">주민등록번호</FormLabel>
          <Input
            name="jumin"
            id="jumin"
            placeholder="ex)891107-1065418"
            onChange={setJuminText}
            value={jumin}
          />
          <br/>
          <FormLabel htmlFor="phoneNum">휴대폰 번호</FormLabel>
          <Input
            name="phoneNum"
            id="phoneNum"
            placeholder="ex)010-1234-5678"
            onChange={setPhoneNumText}
            value={phoneNum}
          />
          <br/>
          <FormLabel htmlFor="marry">결혼 유무</FormLabel>
          <Input 
            name="marry"
            id="marry"
            placeholder="결혼 유무"
            onChange={setMarryText}
          />
          <br/>
          <FormLabel htmlFor="hobby">취미</FormLabel>
          <NativeSelect id="hobby" name="hobby" onChange={setHobbyText}>
            <option value={hobby}>선택</option>
            <option value="soccer">축구</option>
            <option value="basketball">농구</option>
            <option value="bycycle">자전거</option>
            <option value="movie">영화보기</option>
          </NativeSelect>
          <br/>
          <FormLabel htmlFor="date">생년월일</FormLabel>
          <Input type="date" name="date" id="date" onChange={setDateText}/>
          <br/>
          <Input type="submit" value="저장"/>
          </form>
          <div>
            {name}
            <br/>
            {jumin}
            <br/>
            {phoneNum}
            <br/>
            {marry}
            <br/>
            {hobby}
            <br/>
            {date}
          </div>
      </div>
    </>
  );
};


export default App;
