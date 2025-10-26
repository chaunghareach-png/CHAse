import React from 'react';

interface CustomInputsProps {
  sceneSetup: string;
  onSceneSetupChange: (value: string) => void;
  timelineAction: string;
  onTimelineActionChange: (value: string) => void;
}

const CustomInputs: React.FC<CustomInputsProps> = ({
  sceneSetup,
  onSceneSetupChange,
  timelineAction,
  onTimelineActionChange,
}) => {
  const sceneSetupInstruction = `장면의 장소와 시간, 주요 배경과 인물을 간단히 그려내는 문장입니다.\n예) “밤 비 내리는 도시, 네온 빛이 젖은 거리 위에 반사되고 한 남자가 전화 부스 옆에 서 있다."`;

  const timelineActionInstruction = `[TIMELINE & ACTION]
1. 0 ~ 4초 – 무엇이 처음 보이는가? (카메라 위치 + 피사체 포즈)
2. 4 ~ 8초 – 무엇이 움직이는가? (피사체, 렌즈, 조명 변화)
3. 8 ~ 12초 – 어떻게 끝나는가? (페이드 · 컷 · 전환 방식)`;

  return (
    <div className="space-y-6 bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700">
      <h3 className="text-xl font-semibold text-cyan-300 -mb-2">프롬프트 사용자 지정 (선택사항)</h3>
      <div>
        <label htmlFor="sceneSetup" className="block text-lg font-semibold text-gray-300 mb-1">
          [Scene Setup]
        </label>
        <p className="text-sm text-gray-400 mb-2 whitespace-pre-wrap">{sceneSetupInstruction}</p>
        <textarea
          id="sceneSetup"
          rows={5}
          className="w-full bg-gray-900/70 border border-gray-600 rounded-md p-3 text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-y"
          value={sceneSetup}
          onChange={(e) => onSceneSetupChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="timelineAction" className="block text-lg font-semibold text-gray-300 mb-1">
          [Timeline & Action]
        </label>
        <p className="text-sm text-gray-400 mb-2 whitespace-pre-wrap">{timelineActionInstruction}</p>
        <textarea
          id="timelineAction"
          rows={5}
          className="w-full bg-gray-900/70 border border-gray-600 rounded-md p-3 text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-y placeholder:text-gray-500"
          placeholder="사용자 지정 타임라인을 여기에 입력하세요..."
          value={timelineAction}
          onChange={(e) => onTimelineActionChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomInputs;
