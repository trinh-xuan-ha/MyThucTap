'use client'
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import RegisterPage from "@/components/login/register-form";
import LoginPage from "@/components/login/login-form";

interface FormErrors {
  email?: string;
  Fullname?: string;
  password?: string;
  confirmPassword?: string;
}

type AccountProps = {
  onClose: () => void;
}

export default function Account({ onClose }: AccountProps) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [dataUser, setDataUser] = useState([]);

  const [formValues, setFormValues] = useState({
    email: "",
    Fullname: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxBIyKNPidpfCi34bygxjjlEfu2uAFL9i5eOIMQUDZgHVn3bpkrZSJDKi_ablx343VN/exec");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDataUser(data.data);
        console.table(data.data);
        alert(data.name)
        alert("ha");
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);
  getData();
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // submitUsers();
    }
  }

  const validate = (values: any): FormErrors => {
    const errors: FormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email";
    } else if (dataUser.some((user: any) => user.email === values.email)) {
      errors.email = "Email already exists";
    }


    if (!values.Fullname) {
      errors.Fullname = "Please enter your fullname";
    }
    if (!values.password) {
      errors.password = "Please enter your password";
    } else if (values.password.length < 4) {
      errors.password = "Password must be at least 4 characters long";
    } else if (values.password.length > 10) {
      errors.password = "Password must be at most 10 characters long";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };


  return (
    <nav

      className="modal-container z-50 fixed left-0 top-0 w-full h-full flex items-center justify-center bg-slate-700/30"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="z-50 relative bg-white rounded-md p-8 w-[420px]">
        <p
          onClick={() => onClose()}
          className="absolute top-[-20px] right-[-26px] p-2 hover:bg-slate-300 rounded-full cursor-pointer"
        >
          <IoCloseSharp />
        </p>
        <nav>
          <div className="inline-block bg-[#e4e7ea] min-w-60 rounded-md p-2">
            <div className="flex text-center w-full">
              <div
                onClick={() => setRegisterOpen(false)}
                className={`btn-login p-1 w-1/2 cursor-pointer ${!registerOpen && 'activelogin'}`}
              >
                Login
              </div>
              <div
                onClick={() => setRegisterOpen(true)}
                className={`btn-login p-1 w-1/2 cursor-pointer ${registerOpen && 'activelogin'}`}
              >
                Register
              </div>
            </div>
          </div>
          {registerOpen ? (
            // <div>
            //   <form onSubmit={handleSubmit} className="register flex flex-col gap-y-4">
            //     <strong className="w-full mt-4">Create your account</strong>
            //     <div className="flex flex-col gap-y-2">
            //       <label className="w-full flex text-center items-center gap-x-1">
            //         Email address
            //         <span className="text-red-500">*</span>
            //       </label>
            //       <input
            //         className={`w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea] ${formErrors.email && 'border-red-500'}`}
            //         type="email"
            //         name="email"
            //         placeholder="Enter your email"
            //         value={formValues.email}
            //         onChange={handleChange}
            //       />
            //       <p className="text-red-500">{formErrors.email}</p>
            //     </div>
            //     <div className="flex flex-col gap-y-2">
            //       <label className="w-full flex text-center items-center gap-x-1">
            //         Full Name
            //         <span className="text-red-500">*</span>
            //       </label>
            //       <input
            //         className={`w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea] ${formErrors.Fullname && 'border-red-500'}`}
            //         type="text"
            //         name="Fullname"
            //         placeholder="Enter your Full Name"
            //         value={formValues.Fullname}
            //         onChange={handleChange}
            //       />
            //       <p className="text-red-500">{formErrors.Fullname}</p>
            //     </div>
            //     <div className="flex flex-col gap-y-2">
            //       <label className="w-full flex text-center items-center gap-x-1">
            //         Password
            //         <span className="text-red-500">*</span>
            //       </label>
            //       <input
            //         className={`w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea] ${formErrors.password && 'border-red-500'}`}
            //         type="password"
            //         name="password"
            //         placeholder="Enter your password"
            //         value={formValues.password}
            //         onChange={handleChange}
            //       />
            //       <p className="text-red-500">{formErrors.password}</p>
            //     </div>
            //     <div className="flex flex-col gap-y-2">
            //       <label className="w-full flex text-center items-center gap-x-1">
            //         Confirm password
            //         <span className="text-red-500">*</span>
            //       </label>
            //       <input
            //         className={`w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea] ${formErrors.confirmPassword && 'border-red-500'}`}
            //         type="password"
            //         name="confirmPassword"
            //         placeholder="Confirm your password"
            //         value={formValues.confirmPassword}
            //         onChange={handleChange}
            //       />
            //       <p className="text-red-500">{formErrors.confirmPassword}</p>
            //     </div>
            //     <button
            //       type="submit"
            //       className="bg-black text-white flex justify-center items-center py-3 rounded-md hover:bg-red-500 cursor-pointer"
            //     >
            //       REGISTER
            //     </button>
            //   </form>
            // </div>
            <RegisterPage />
          ) : (
            // <form className="flex flex-col gap-y-4 login">
            //   <strong className="w-full mt-4">
            //     Insert your account information:
            //   </strong>
            //   <div className="flex flex-col gap-y-2">
            //     <label>Email address</label>
            //     <input
            //       className="w-full p-2 border-inherit rounded-[0.3rem] py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea]"
            //       type="email"
            //       placeholder="Enter your email"
            //     />
            //   </div>
            //   <div className="flex flex-col gap-y-2">
            //     <label>Password</label>
            //     <input
            //       className="w-full rounded-[0.3rem] p-2 border-inherit py-3 border-[#e7e8eb] hover:border-red-500 border-2 bg-[#e4e7ea]"
            //       type="password"
            //       placeholder="Enter your password"
            //     />
            //   </div>
            //   <div className="flex text-center items-center gap-x-1">
            //     <CgMail />
            //     <p>Forgot your</p>
            //     <strong className="hover:text-red-500 cursor-pointer">
            //       Password?
            //     </strong>
            //   </div>
            //   <div className="bg-black text-white flex justify-center items-center py-3 rounded-md hover:bg-red-500 cursor-pointer">
            //     LOGIN
            //   </div>
            // </form>
            <LoginPage />
          )}
        </nav>
      </div>
    </nav>
  );
}
async function getData() {
  const response = await fetch("http://localhost:3000/clothes");
  const data = await response.json();
  console.table(data);
  return data;
}
