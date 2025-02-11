import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form'
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import { InputSelect, InputText, InputMultiSelect, InputCheckbox, InputRadio, InputTextarea } from '../../component/Input/';
import { required, mustBeNumber, minValue, maxValue, composeValidators } from '../../service/FormValidate.service'
import { Alert } from '../../component/Alert';
import ApiService from '../../service/Api.service';
import SimpleView from '../../component/SimpleView';
import { BreadcrumbLayout } from '../../component/Layout';

export default function LedgerView(props) {

    const [myAleryObj, setMyAleryObj] = useState([]);
    const [tbl, setTbl] = useState({ rows: [], cols: [] });
    const [breadcrumbLayoutData, setBreadcrumbLayoutData] = useState({ list: [] });
    const navigate = useNavigate();

    const event = function ({ r, c, d }) {
        console.log(r, c, d)
        var alertData = { Headers: "Success", Msg: "Ledger Inserted Successfull.  ID -" + d }
        var random = Math.random();
        setMyAleryObj(<Alert key={random} data={alertData}></Alert>)
        navigate("/acc/ledger_data_edit?id=" + d)
    }

    const init = async function () {
        var bData = {};
        bData.H4 = "Accounts";
        bData.list = [
            { label: "Accounts", to: "./" },
            { label: "Ledger", to: "./" },
            { label: "View", to: "./" }
        ]
        bData.ritBtn = { label: "+ Add ", to: "/acc/ledger_data" };
        setBreadcrumbLayoutData(bData);

        var menuData = await ApiService.httpPost("/acc/acc_ledger/view", {})
        var cols = [
            { key: 1, lable: `#`, keyId: "id", action: {}, beforeRender: ({ row, col, data }) => { return <strong>{data}</strong>; } },
            { key: 2, lable: `Group Id`, keyId: "group_id", action: {} },
            { key: 3, lable: `Name`, keyId: "name", action: {} },
            { key: 4, lable: `Code`, keyId: "code", action: {} },
            { key: 5, lable: `Type`, keyId: "type", action: {} },
            { key: 6, lable: `Reconciliation`, keyId: "reconciliation", action: { click: function () { } } },
            {
                key: 7, lable: `Action`, keyId: "id", action: { click: function ({ r, c, d }) { event({ r, c, d }) } }, beforeRender: ({ row, col, data }) => {
                    return <button onClick={(e) => {
                        col.action.click({ r: row, c: col, d: data });
                    }} type="button" className="btn-clipboard" title="" data-bs-original-title="Copy to clipboard">More</button>
                }
            }
        ]
        setTbl({ rows: menuData.acc_ledgers, cols: cols })
    }

    useEffect(() => {
        init();
    }, [])


    return (<>
        <BreadcrumbLayout attData={breadcrumbLayoutData}></BreadcrumbLayout>
        <div className="card ">
            <div className="row g-3 card-body"><h5 className="card-title">Ledger View</h5><hr />
                <div className='container'>
                    <SimpleView rows={tbl.rows} cols={tbl.cols}></SimpleView>
                </div>
            </div>
        </div>
        <br />
        {myAleryObj}
    </>)
}