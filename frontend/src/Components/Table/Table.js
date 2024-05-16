import React from 'react';
import styles from './Table.module.css'; 
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tablecomponent = ({ data, headings }) => (
  <div className={styles.tableContainer}>
    <div className={styles.tableResponsive}>
      <Table className={styles.customTable}> 
        <thead>
          <tr className={styles.head}>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr className={styles.bodyRow} key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td className={styles.body} key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);

export default Tablecomponent;
