export default function getButtonContent(
  formStatus,
  loading,
  sendBtn,
  sendBtnSuccess,
  sendBtnError,
  SuccessIcon,
  Loader,
  ErrorIcon,
) {
  if (formStatus === 'success') {
    return (
      <>
        <SuccessIcon className="w-[16px] h-[12px]" /> {sendBtnSuccess}
      </>
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (formStatus === 'error') {
    return (
      <>
        <ErrorIcon className="w-[14px] h-[14px]" /> {sendBtnError}
      </>
    );
  }

  return sendBtn;
}
