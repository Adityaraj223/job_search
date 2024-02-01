import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJobs = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    //console.log(data);

    fetch("http://localhost:3000/post-job", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job posted successfully!!!");
        }
        reset();
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5 ">
          {/* 1st left side  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg"> Job title </label>
              <input
                type="text"
                defaultValue={"Web developer "}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg"> Company Name</label>
              <input
                type="text"
                placeholder={"Ex: Microsoft "}
                {...register("company name")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2st right side  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary </label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type </label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="EX: Seattle"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting date</label>
              <input
                type="date"
                placeholder="EX: 2023-10-28"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level </label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Choose your experience</option>
                <option value=" No Experience">Hourly</option>
                <option value="Intership">Intership</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row  */}
          <div>
            <label className="block mb-2 text-lg">Required Skill Sets</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4 bg-white border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* 6th row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="Url"
                placeholder="Place Your company logo URL: https://weshare.com/img1 "
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type </label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Choose your experience</option>
                <option value=" Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row  */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-500 border border-gray-300 rounded-md"
              rows={6}
              defaultValue={
                " A job description is a written explanation that outlines the essential responsibilities and requirements for a vacant position. Job descriptions should be thorough, clear, and concise and include: A brief introduction to the company and its mission. An overview of the job responsibilities.  "
              }
              placeholder="Job Description"
              {...register("description")}
            />
          </div>

          {/* last  */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job posted by</label>
            <input
              type="email"
              placeholder="your email"
              {...register("postedby")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold px-8 py-3 rounded-md cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-900 transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJobs;
