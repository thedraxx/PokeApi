import styled from "styled-components";

export const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  margin-top: 4vh;
  margin-left: 0vh;

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
  margin: 7px;
  background-color: white;
  text-decoration: none;
  text-shadow: none;
  border: 1px solid #bebebe;
  padding: 10px;
  font-size: 1rem;

`;

