import Button from "../../components/shared/Button/Button";

const ContactForm = () => {
  return (
    <div className="p-3">
     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="pt-10 px-10">
        <h1 className="font-semibold pt-5 lg:text-2xl mb-2">Request a Tour</h1>
        <h1 className="">Choose your preffered day</h1>
        </div>
          <form className="card-body">
          <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="form-control">
              <input
                type="text"
                placeholder="Time"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                placeholder="Time"
                className="input input-bordered"
                required
              />
            </div>
          </div>
            <div className="form-control">
              <textarea
                type="text"
                placeholder="Write a message"
                className="input input-bordered h-[20vh] py-2"
                required
              />
            </div>
            <div className="form-control mt-6">
            <Button label={"Submit A Tour Request"}></Button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default ContactForm;
