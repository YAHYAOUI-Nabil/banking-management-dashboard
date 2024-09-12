import AuthForm from "@/components/AuthForm";

const Signin = () => {
  return (
    <section className="flex justify-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default Signin;
