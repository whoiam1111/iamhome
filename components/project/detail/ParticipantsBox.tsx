import { Participants } from "../../../lib/types/project";

interface ParticipantsProps {
  participants: Participants;
}

interface StaffType {
  [key: string]: string;
}

const staffTitle: StaffType = {
  staff: "스태프",
  performer: "공연자",
  manager: "매니저",
  mc: "사회자",
  speaker: "강사",
};

export default function ParticipantsBox({ participants }: ParticipantsProps) {
  return (
    <section className="flex flex-col gap-8">
      {Object.entries(participants)
        .filter((el) => el[1].length > 0)
        .map((participant, idx) => (
          <div key={idx}>
            <div className="flex items-center mb-2">
              <span className="h-3 w-3 bg-blue-500 rounded-full mr-3"></span>
              <h2 className="text-lg md:text-xl font-bold tracking-wider">
                {staffTitle[participant[0]]}
              </h2>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div>
                <h3 className="font-bold text-lg flex gap-3">
                  {participant[1].map((staff: string) => (
                    <span
                      key={staff}
                      className="text-sm md:text-base font-normal texct-gray-700 not-last:after:content-[',']"
                    >
                      {staff}
                    </span>
                  ))}
                </h3>
                {/* <p className="text-gray-600 text-sm mt-1">
          담당 스태프에 대한 소개 내용이 여기에 표시됩니다.
        </p> */}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
