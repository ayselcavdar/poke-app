import styled from "styled-components";

const Paragraph = styled.p`
  background-color: ${(props) => props.backgroundColor};
  margin-right: 5px;
  color: white;
  padding: 6px;
  border-radius: 5px;
  text-align: center;
  margin-top: 3px;
`;
const TypePreview = ({ children, backgroundColor }) => {
  return (
    <div title="TypePreviewTitle">
      <Paragraph backgroundColor={backgroundColor}>{children}</Paragraph>
    </div>
  );
};

export default TypePreview;
