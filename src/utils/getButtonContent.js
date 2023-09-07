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
        <SuccessIcon /> {sendBtnSuccess}
      </>
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (formStatus === 'error') {
    return (
      <>
        <ErrorIcon /> {sendBtnError}
      </>
    );
  }

  return sendBtn;
}
