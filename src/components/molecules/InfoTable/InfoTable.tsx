import React from "react";
import styled from "styled-components";

const Table = styled.table`
  position: relative;
  width: 280px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-left: 2px solid ${({ theme }) => theme.color.primary};
  box-shadow: 10px 6px 6px 2px rgba(0, 0, 0, 0.12);
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.primary};
  h3 {
    font-size: 24px;
    margin: 5px 0 10px;
  }
  tbody {
    display: block;
  }
  th,
  td {
    text-align: left;
    padding: 10px 5px 10px 15px;
    span {
      ::after {
        content: " ";
        position: absolute;
        left: -2px;
        display: block;
        height: 1px;
        width: 80%;
        border-bottom: 2px solid ${({ theme }) => theme.color.primary};
      }
    }
  }
  th::first-letter,
  td::first-letter {
    text-transform: uppercase;
  }
`;

const InfoTable = ({
  title,
  children
}: {
  title: string;
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <section>
      <Table>
        <thead>
          <tr>
            <th>
              <h3>{title}</h3>
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </section>
  );
};
export default InfoTable;
