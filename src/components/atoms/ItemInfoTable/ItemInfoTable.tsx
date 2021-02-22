import { IItemInfoTable } from "interfaces/interfaces";

const ItemInfoTable = ({ name, children }: IItemInfoTable) => (
  <tr>
    <td>{name}</td>
    <td>{children}</td>
  </tr>
);
export default ItemInfoTable;
