import React from "react";

interface IToastType {
  color: string;
  imgSrc: string;
  toastType: string;
  toastMessage: string;
  border: string;
}

interface IToastNotificationProp {
  toastMessage: string;
  type: string;
}

const ToastNotification = (toast: IToastNotificationProp) => {
  switch (toast.type) {
    case "success":
      return (
        <ToastComp
          color={"bg-[#47D764]"}
          imgSrc={"/success.svg"}
          toastType={"Success"}
          toastMessage={toast.toastMessage}
          border={"border-[#47D764]"}
        />
      );
    case "error":
      return (
        <ToastComp
          color={"bg-[#ff355b]"}
          imgSrc={"/error.svg"}
          toastType={"Error"}
          toastMessage={toast.toastMessage}
          border={"border-[#ff355b]"}
        />
      );
    case "info":
      return (
        <ToastComp
          color={"bg-[#2F86EB]"}
          imgSrc={"/info-T.svg"}
          toastType={"Info"}
          toastMessage={toast.toastMessage}
          border={"border-[#2F86EB]"}
        />
      );
    case "warning":
      return (
        <ToastComp
          color={"bg-[#FFC021]"}
          imgSrc={"/warning.svg"}
          toastType={"Warning"}
          toastMessage={toast.toastMessage}
          border={"border-[#FFC021]"}
        />
      );

    default:
      return <></>;
  }
};

export default ToastNotification;

const ToastComp = (toast: IToastType) => {
  return (
    <div
      className={` flex border-l-8 fixed justify-around bottom-2 right-1 ${toast.border} gap-3 w-[380px] h-[80px] rounded-lg bg-white items-center pl-2 shadow-[0_0_50px_7px_rgba(0,0,0,0.08)]`}
    >
      <div
        className={` w-10 h-10 rounded-full grid place-items-center ${toast.color}`}
      >
        <img src={toast.imgSrc} alt="" />
      </div>
      <div className=" flex flex-col">
        <p className=" font-outfit font-semibold text-[#101020]">
          {toast.toastType}
        </p>
        <p className=" text-sm text-[#656565]">{toast.toastMessage}</p>
      </div>
      <div className=" flex flex-col h-full pt-2 justify-start text-lg font-medium">
        x
      </div>
    </div>
  );
};
