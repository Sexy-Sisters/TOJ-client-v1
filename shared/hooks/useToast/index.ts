import Swal from "sweetalert2";

type iconType = "success" | "error" | "warning" | "info" | "question";

const useToast = () => {
  const Toast = Swal.mixin({
    width: "300px",
    position: "top",
    toast: true,
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
  });

  const onToast = (icon: iconType, title: string) => {
    Toast.fire({
      icon: icon,
      title: title,
    });
  };

  return { onToast };
};

export default useToast;
