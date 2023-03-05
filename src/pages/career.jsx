import Header1 from "@/components/Header1";
import { getJobs } from "@/hooks/jobs";
import React, { useEffect } from "react";

const career = ({ jobs }) => {
  return (
    <div>
      <Header1 title="Rise with Us" />
      <div className="my-20 w-[80%] md:w-[90%] mx-auto">
        <h3 className="text-4xl font-bold mb-4">Join Our Team</h3>
        <p className="text-lg mb-12">
          At First Line Logistics Nigeria Limited, we're committed to providing
          top-notch logistics solutions to our clients across the nation. We're
          always on the lookout for talented and driven individuals to join our
          team and help us deliver exceptional service to our customers.
        </p>
        <h3 className="text-4xl font-bold mb-4">Why Work with Us?</h3>
        <p className="text-lg mb-12">
          As a member of our logistics team, you'll have the opportunity to work
          in a dynamic and fast-paced environment, collaborate with experienced
          professionals, and develop your skills and expertise. We offer
          competitive compensation packages, flexible work arrangements, and
          opportunities for career advancement.
        </p>
        <h3 className="text-4xl font-bold mb-4">How to Apply</h3>
        <p className="text-lg mb-12">
          If you're passionate about logistics and want to join a dynamic and
          growing team, we'd love to hear from you. Please send your resume and
          cover letter to hr@firstlinelogistics.ng with the email title as the
          specifc job title and we'll be in touch.
        </p>
        <h3 className="text-4xl font-bold mb-20">Job Openings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          {jobs.map((jobAdvert) => (
            <div
              key={jobAdvert.id}
              className="rounded overflow-hidden shadow-lg w-full"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{jobAdvert.title}</div>
                <p className="text-gray-700 text-base mb-4">
                  Location: {jobAdvert.location}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Minimum Qualification: {jobAdvert.minQualification}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Closing Date: {jobAdvert.closingDate.toDate().toDateString()}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Description: {jobAdvert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default getJobs(career);
