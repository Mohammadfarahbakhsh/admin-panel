import Swal from "sweetalert2";

const WithAlert2=(props)=>{
        const Cancel=(message,icon)=>{
        Swal.fire({
        title: "لغو شد",
        text: message,
        icon: icon,
        confirmButtonText: "باشه",
        customClass: {
          confirmButton: "bg-black rounded-sm px-4 py-2 text-white",
        },
      });
    }
    const Error=(message,icon)=>{
            Swal.fire({
          title: "خطا!",
          text: message,
          icon: icon,
          confirmButtonText: "باشه",
          customClass: {
            confirmButton: "bg-black rounded-sm px-4 py-2 text-white",
          },
        });
    }
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "bg-black rounded-sm px-4 py-2 text-white mx-2",
            cancelButton: "bg-red-600 rounded-sm px-4 py-2 text-white mx-2",
          },
          buttonsStyling: false,
        });
    
        const Confirm = async (message) => {
          const result = await swalWithBootstrapButtons.fire({
            title: message,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله، حذف شود",
            cancelButtonText: "خیر",
            reverseButtons: true,
          });
          return result.isConfirmed;
        };
        const Alert =(message,icon)=>{
                      Swal.fire({
                        title: "حذف شد!",
                        text:message,
                        icon: icon,
                        confirmButtonText: "باشه",
                        customClass: {
                          confirmButton: "bg-black rounded-sm px-4 py-2 text-white",
                        },
                      });
        }
    return(
        <>
        {props.render(Confirm,Alert,Error,Cancel)}
        </>
    )
}


export default WithAlert2