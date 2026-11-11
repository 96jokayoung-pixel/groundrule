// =====================================================================
//  그라운드 룰 사이트 설정 — 관리자가 한 번만 채우면 됩니다.
//  (주소와 Publishable key 는 공개되어도 괜찮은 값이에요. 데이터는 setup.sql 의
//   규칙으로 보호되어, 각 팀장님은 자기 것만, 관리자만 전체를 볼 수 있습니다.)
// =====================================================================
window.GR_CONFIG = {
  // Supabase > Project Settings > Data API 의 Project URL
  supabaseUrl: "https://lwwuulfkzkybofhvgrfw.supabase.co",

  // Supabase > Project Settings > API Keys 의 Publishable key (sb_publishable_ 로 시작)
  //  * 예전 프로젝트라면 anon public 키(eyJ 로 시작)를 넣어도 됩니다.
  supabaseKey: "sb_publishable_36mqh9tCnts-h63LHFoIeg_hwruyvPy",

  // 가입을 허용할 회사 이메일 도메인 (setup.sql ② 와 같게)
  emailDomain: "bgf.co.kr",

  // 화면 맨 위에 표시할 조직 이름 (비워도 됩니다)
  orgName: ""
};
