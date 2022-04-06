import styled from "styled-components";

export const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  margin-top: 5vh;
  margin-left: 5vh;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const NAV = styled.div`
  background-color: #f24a72;
  color: white;
  text-align: center;
  padding: 2rem;
  font-size: 30px;
  margin: 3px;
  border-radius: 13px;
`;

export const H5 = styled.div`
  text-align: center;
  color: white;
`;

//Component Search
export const FORM = styled.form`
  display: inline-block;
  position: relative;
  width: 100%;
  margin: 0px auto;
  text-align: center;
`;

export const INPUT = styled.input`
  border-radius: 5px;
  margin: 5px;
`;

export const containercard = {
  width: "18rem",
  backgroundColor: "#fdfdfd",
  boxShadow: "1.5px 3px 7px black",
  background:
    "linear-gradient(150deg, rgba(2,0,36,1) 0%, #ffffff 0%, #ffcd95 100%)",
  borderRadius: "40px",
};

export const datas = {
  width: "18rem",
  backgroundColor: "#ffecce",
  boxShadow: "1px 3px 7px black",
  textShadow: "1px 1px 1px black",
};

export const cardtitle = {
  color: "#fff",
};
