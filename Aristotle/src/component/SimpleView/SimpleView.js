import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';

const SignUpForm = (props) => {
    const { rows, cols } = props;

    return (<>
        <div className='container'>
            <table className="table caption-top table-sm table-responsive">
                <thead>
                    <tr>
                        {
                            cols.map((col, index) => (
                                <th scope="col" key={index}>{col.lable}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, rIndex) => (
                            <tr key={rIndex}>
                                {
                                    cols.map((col, index) => (
                                        <td key={rIndex + '_' + index}>
                                            {col?.beforeRender ? col.beforeRender({ row, col, data: row[col.keyId] }) : row[col.keyId]}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>);
}

export default SignUpForm;
