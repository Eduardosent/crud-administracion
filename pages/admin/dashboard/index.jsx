import { IoMdAdd } from "react-icons/io";

import Table from "@/components/Table";
import Modal from "@/components/Modal";
import FormCreate from "@/components/FormCreate";
import UpdateModal from "@/components/UpdateModal";
import { useState } from "react";

export default function Dashboard(){

    const[updateModal,setUpdateModal] = useState(true)

    var data = {
        name : 'Licuadora',
        price : 0.5,
        description : 'descripcion',
        amount : 1
    }

    return(
        <div className="relative">
            <UpdateModal show={updateModal} setShow={()=>{setUpdateModal(false)}} update={()=>{print('update')}} data={data}/>
            <a className="border-2 py-2 px-5 bg-green-400" href="/admin/dashboard/create_product">Crear</a>
            <Table openModal={setUpdateModal}/>
        </div>
    )
}