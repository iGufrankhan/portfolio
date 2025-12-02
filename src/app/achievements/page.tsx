"use client";

import HoverCard from "../components/HoverCard";
import { Award, BookOpen, Database, Code, CheckCircle, Trophy } from "lucide-react";

export default function achievements() {
  return (
    <div className="container mx-auto px-6 py-20">

      {/* Certifications */}
      <h1 className="text-center text-3xl font-bold mb-12">
        Certifications & Licences
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* AWS */}
        <HoverCard
          onClick={() =>
            window.open(
              "https://media.geeksforgeeks.org/courses/certificates/9425477864485ec92a31efb085a42bc7.pdf",
              "_blank"
            )
          }
        >
          <div className="flex items-start space-x-4">
            <Award size={30} className="text-blue-500" />
            <div>
              <h2 className="font-semibold text-lg hover:text-blue-500 transition-colors">
                AWS Certified Solutions Architect Associate
              </h2>
              <p className="text-sm mt-2">
                Hands-on training in secure and scalable AWS architecture.
              </p>
            </div>
          </div>
        </HoverCard>

        {/* ML GFG */}
        <HoverCard
          onClick={() =>
            window.open(
              "https://media.geeksforgeeks.org/courses/certificates/57cd6346841299e1001e79bf26275d20.pdf",
              "_blank"
            )
          }
        >
          <div className="flex items-start space-x-4">
            <BookOpen size={30} className="text-green-500" />
            <div>
              <h2 className="font-semibold text-lg hover:text-blue-500 transition-colors">
                Machine Learning – GeeksforGeeks
              </h2>
              <p className="text-sm mt-2">
                26-week ML, DL, NLP, Data Analysis program.
              </p>
            </div>
          </div>
        </HoverCard>

        {/* DBMS Scaler */}
        <HoverCard
          onClick={() =>
            window.open("https://moonshot.scaler.com/s/sl/mDHnyxrO_V", "_blank")
          }
        >
          <div className="flex items-start space-x-4">
            <Database size={30} className="text-purple-500" />
            <div>
              <h2 className="font-semibold text-lg hover:text-blue-500 transition-colors">
                DBMS – Scaler
              </h2>
              <p className="text-sm mt-2">Transactions, SQL, Normalization, Relations.</p>
            </div>
          </div>
        </HoverCard>

        {/* TLE Excellence */}
        <HoverCard
          onClick={() =>
            window.open(
              "https://github.com/iGufrankhan/Certificate/blob/main/Course_Excellence_Gufran%20khan.pdf",
              "_blank"
            )
          }
        >
          <div className="flex items-start space-x-4">
            <Code size={30} className="text-red-500" />
            <div>
              <h2 className="font-semibold text-lg hover:text-blue-500 transition-colors">
                Certificate of Excellence – TLE
              </h2>
              <p className="text-sm mt-2">C++ competitive programming excellence.</p>
            </div>
          </div>
        </HoverCard>

        {/* HackerRank */}
        <HoverCard
          onClick={() =>
            window.open(
              "https://www.hackerrank.com/certificates/d8c9a93644e5",
              "_blank"
            )
          }
        >
          <div className="flex items-start space-x-4">
            <CheckCircle size={30} className="text-yellow-500" />
            <div>
              <h2 className="font-semibold text-lg hover:text-blue-500 transition-colors">
                Problem Solving – HackerRank
              </h2>
              <p className="text-sm mt-2">Certified C++ problem-solving skills.</p>
            </div>
          </div>
        </HoverCard>

      </div>

      {/* CP Section */}
      <h1 className="text-center text-3xl font-bold mb-12 py-20">
        Competitive Programming Achievements
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* CodeChef */}
        <HoverCard
          onClick={() =>
            window.open("https://www.codechef.com/users/codewithgufran", "_blank")
          }
        >
          <div className="flex items-start space-x-4">
            <Trophy size={30} className="text-orange-500" />
            <div>
              <h2 className="text-xl font-semibold hover:text-blue-500 transition-colors">
                CodeChef – Max Rating: 1620 (3★)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Achieved Global Rank 128 in Starters 180.
              </p>
            </div>
          </div>
        </HoverCard>

        {/* Codeforces */}
        <HoverCard
          onClick={() =>
            window.open("https://codeforces.com/profile/I_am_BackTrack", "_blank")
          }
        >
          <div className="flex items-start space-x-4">
            <Trophy size={30} className="text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold hover:text-blue-500 transition-colors">
                Codeforces – Max Rating: 1318 (Pupil)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Rank 3391 in Round 1040 (Div. 2)
              </p>
            </div>
          </div>
        </HoverCard>

        {/* LeetCode */}
        <HoverCard
          onClick={() =>
            window.open("https://leetcode.com/u/I_am_BackTrack/", "_blank")
          }
        >
          <div className="flex items-start space-x-4">
            <Trophy size={30} className="text-green-500" />
            <div>
              <h2 className="text-xl font-semibold hover:text-blue-500 transition-colors">
                LeetCode – Max Rating: 1757
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Rank 2079 in Biweekly Contest 168
              </p>
              <p className="text-gray-600 dark:text-gray-300">Problems Solved: 283</p>
            </div>
          </div>
        </HoverCard>

        {/* GFG */}
        <HoverCard
          onClick={() =>
            window.open("https://www.geeksforgeeks.org/profile/iambacktrack", "_blank")
          }
        >
          <div className="flex items-start space-x-4">
            <Trophy size={30} className="text-purple-500" />
            <div>
              <h2 className="text-xl font-semibold hover:text-blue-500 transition-colors">
                GFG – Coding Score: 1730
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Rank 24 (Institute)
              </p>
              <p className="text-gray-600 dark:text-gray-300">Problems Solved: 515</p>
            </div>
          </div>
        </HoverCard>

      </div>

      {/* Academic */}
      <h1 className="text-center text-3xl font-bold mb-12 py-20">
        Academic Achievements
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <HoverCard>
          <div className="flex items-start space-x-4">
            <Trophy size={30} className="text-pink-500" />
            <div>
              <h2 className="font-semibold text-lg">
                B.Tech – Information Technology
              </h2>
              <p className="text-sm mt-2">
                CGPA: <strong>8.9</strong>
              </p>
            </div>
          </div>
        </HoverCard>
      </div>
    </div>
  );
}
