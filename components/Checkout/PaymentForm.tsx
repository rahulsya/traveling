import React from "react";
import Input from "../Input";

function PaymentForm() {
  return (
    <div className="flex ">
      <div className="text-Nblue-500 w-[420px]">
        <div>Transfer Pembayaran</div>
        <div>Tax : 18%</div>
        <div>Sub Total : $480 USD</div>
        <div>Total : $800 USD</div>

        <div className="flex items-center">
          <div className="rounded-md bg-gray-100 w-[64px] h-[64px] mr-4" />
          <div>
            <div>Bank central Asia</div>
            <div>628117229</div>
            <div>Staycation</div>
          </div>
        </div>
      </div>

      <div className="w-[1px] bg-gray-200 mx-[50px]" />

      <div>
        <Input title="Upload Bukti Transfer" placeholder="Upload here" />
        <Input title="Asal Bank" placeholder="Please Type Here" />
        <Input title="Nama Pengirim" placeholder="Please Type Here" />
      </div>
    </div>
  );
}

export default PaymentForm;
