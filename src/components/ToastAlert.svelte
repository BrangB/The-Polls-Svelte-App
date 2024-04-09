<script>
  // @ts-ignore
  import { toasts, ToastContainer, FlatToast, BootstrapToast }  from "svelte-toasts";

  // @ts-ignore
  const showToast = () => {
    // @ts-ignore
    const toast = toasts.add({
      title: 'Message title',
      description: 'Message body',
      duration: 10000, // 0 or negative to avoid auto-remove
      placement: 'bottom-right',
      type: 'info',
      theme: 'dark',
      // @ts-ignore
      placement: 'bottom-right',
      // @ts-ignore
      type: 'success',
      // @ts-ignore
      theme,
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });

    // toast.remove()
  };
</script>

<button on:click={showToast}>toast</button>
<ToastContainer placement="bottom-right" let:data={data}>
    <FlatToast {data} /> <!-- Provider template for your toasts -->
</ToastContainer>