import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { InputSelect, InputText, InputMultiSelect, InputCheckbox, InputRadio, InputTextarea } from '../../component/Input/';
import { required, mustBeNumber, minValue, maxValue, composeValidators } from '../../service/FormValidate.service'
import { Alert } from '../../component/Alert';
import ApiService from '../../service/Api.service';
import { BreadcrumbLayout } from '../../component/Layout';

export default function LedgerData(props) {

    const [myAleryObj, setMyAleryObj] = useState([]);
    const [optionValue, setOptionValue] = useState({ "acc_group": {}, "": {} });
    const [initalData, setInitalData] = useState({});
    const [breadcrumbLayoutData, setBreadcrumbLayoutData] = useState({ list: [] });
    var menuOption = {};

    const init = async function () {
        var bData = {};
        bData.H4 = "Accounts";
        bData.list = [{ label: "Accounts", to: "./" }, { label: "Ledger", to: "./" }, { label: "Edit", to: "./" }]
        bData.ritBtn = { label: "View ", to: "/acc/ledger_view" };
        setBreadcrumbLayoutData(bData);
        var id = location.search.split("?id=")[1]
        id = id ? id : 26;
        var menuData = await ApiService.httpPost("/acc/acc_ledger/setInsertDataMenu", {})
        var fieldData = await ApiService.httpPost("/acc/acc_ledger/getInsertData", { id })
        menuOption = menuData;
        setOptionValue(menuData);
        fieldData["acc_ledger"][0]["type"]=fieldData["acc_ledger"][0]["type"]?.toString(); 
        setInitalData(ApiService.data.convertString(fieldData["acc_ledger"][0]));
    }

    useEffect(() => {
        init();
    }, [])

    const onSubmit = async (values, form) => {
        event.preventDefault();
        var formData = values;
        var resData = await ApiService.httpPost("/acc/acc_ledger/updateData", formData)
        // form.reset()
        var alertData = { Headers: "Success", Msg: "Ledger Updatated Successfull." };
        if (resData.status == 206) {
            alertData = { Headers: "Error", Msg: JSON.stringify(resData.error) }
        }
        console.log(resData);
        var random = Math.random();
        setMyAleryObj(<Alert key={random} data={alertData}></Alert>)
    }

    return (<>
        <BreadcrumbLayout attData={breadcrumbLayoutData}></BreadcrumbLayout>

        <Form
            onSubmit={onSubmit}
            initialValues={initalData}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <div className="card ">
                    <form onSubmit={handleSubmit} className="row g-3 needs-validation form-floating card-body" >
                        <h5 className="card-title">Edit Ledger</h5>
                        <hr />
                        <div className="col-md-6">
                            <InputText name="name" required={required} lable="Ledger Name" placeholder="Ledger Name" ></InputText>
                            <InputText name="code" required={required} lable="Code " placeholder="Code for Reference " ></InputText>
                            <InputRadio name="type" required={required} lable="Type" placeholder="Type" options={optionValue.acc_group} ></InputRadio>
                            <InputSelect name="type" required={required} lable="Type" placeholder="Type" options={optionValue.acc_group} ></InputSelect>
                        </div>
                        <div className="col-md-6">
                            <InputSelect name="group_id" required={required} lable="Group ID" placeholder="Group ID" options={optionValue.acc_group} ></InputSelect>
                            <InputTextarea name="reconciliation" lable="Reconciliation" placeholder="Textarea" ></InputTextarea>
                        </div>
                        <div className="buttons">
                            <button type="submit" className={`btn btn-primary ${submitting ? "" : " "}`}>  Submit </button>
                            <button   
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                                className="btn btn-secondary ms-4"  >
                                Reset
                            </button>
                        </div>
                        <pre>{  localStorage.Dev == 1  && JSON.stringify(values, 0, 2)}</pre>
                    </form>
                </div>
            )} />
        <br />
        {myAleryObj}
    </>)
}