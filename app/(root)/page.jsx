import { redirect } from "next/navigation";

const page = () => {
  redirect("/tasks/pending");
};

export default page;
