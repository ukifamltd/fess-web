import React from "react";
import { Target, Eye, Award } from "lucide-react";
import HeroBanner from "../components/HeroBanner";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/25 rounded-full -translate-x-20 -translate-y-10" />
        <div className="absolute top-10 right-20 w-32 h-32 bg-purple-100/25 rounded-full translate-x-16 -translate-y-8" />
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-green-100/15 rounded-full -translate-x-18 translate-y-12" />

      </div>

      <HeroBanner
        title="About FIDROFA Excellence School"
        subtitle="Transforming Communities Through Quality Education"
        backgroundImage="/images/368.jpg"
        overlayColor="from-blue-800/80 to-purple-900/80"
      />

      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Vision</h3>
            </div>
            <p className="text-lg text-gray-700 p-4 rounded-lg">
              Educate and transform communities
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-green-100">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Mission</h3>
            </div>
            <p className="text-lg text-gray-700 p-4 rounded-lg">
              To provide affordable quality education for the transformation of
              Taba communities
            </p>
          </div>
        </div>


        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core principles that guide everything we do at FIDROFA
              Excellence School
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Hardworking
              </h3>
              <p className="text-gray-600">
                We believe in the power of dedication and persistent effort in
                achieving excellence
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for the highest standards in education and personal
                development
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Discipline
              </h3>
              <p className="text-gray-600">
                We cultivate self-control and structured approach to learning
                and growth
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our History
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

                   <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="mb-6">
              <strong>FIDROFA Excellence School (FES)</strong> is a private school, operating in Eastern Province, Bugesera District, Mayange Sector, Kagenge cell and Taba village. It has been founded by <strong>DR. Nizeyimana Fidele</strong>, who did his Doctoral studies in South Korea.
            </p>

            <p className="mb-6">
              During his studies in South Korea, Dr. Fidele was inspired by the Korean education, especially how education transformed South Korea from poverty into a global competitive knowledge based economy. Why then is FES so important to Dr. Fidele and why is it located in Taba village of Mayange and not elsewhere. FES is Dr. Fidele's <strong>"giving back to the community project"</strong>.
            </p>

            <p className="mb-6">
              The inspiration to make this school came in Fall of 2017 when he visited his residence at Mayange from South Korea. While at his residence, he saw farmers and small businesses owners in his neighborhood and many children idle in the street during school hours, making much noise around his residence. These children could not keep quiet even when he asked them to do so. They could not help their parents in the farm, they could not assist in the family business and they were not even going to school.
            </p>

            <p className="mb-6">
              Dr. Fidele perceived this situation as an alarming problem because during his nine years school life in South Korea, he learned that at the age of two, children start academic life by joining early childhood development (ECD) centers. From the age of two years children spend at school, they eat at school until evening, which makes it rare to see idle children moving around or making noises on the street day time.
            </p>

            <p className="mb-6">
              Dr. Fidele felt a strong passion to initiate the FIDROFA Excellence School to contribute to the quality education back at home with the experience he acquired from South Korea. Since then, his long term dreams of establishing and owning a School became clear. In 2021, he initiated FES school with other income generating projects that promote quality education. FES areas of intervention are affordable quality education, economical transformation and creating jobs for Kangenge cell and Taba Village.
            </p>

            <p>
              FES holistically address the needs for quality education in Kagenge Cell and Taba Village. Kagenge cell has a above 10,000 population of people and Taba Village resides above 2000 people. Above 70% people are farmers and small business owners. Children in Taba and other villages in Kagenge and beyond benefit from FES inclusive quality education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
