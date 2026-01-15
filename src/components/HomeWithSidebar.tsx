// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { SectionKey, SIDEBAR } from "./constants/types";
// import { useEffect, useState } from "react";
// //??
// function sectionFromPath(pathname: string): SectionKey {
//     if (pathname.startsWith("/lectures")) return "lectures"
//     if (pathname.startsWith("/community")) return "community"
//     if (pathname.startsWith("/mentoring")) return "mentoring"
//     if (pathname.startsWith("/certifications")) return "certifications"
//     if (pathname.startsWith("/events")) return "events"
//     if (pathname.startsWith("/careers")) return "careers"
//     if (pathname.startsWith("/support")) return "support"
//     return "lectures"
// }



// export default function HomeWithSidebar() {
//     const loc = useLocation()
//     const navigate = useNavigate()

//     const [activeSection, setActiveSection] = useState<SectionKey>(() =>
//         sectionFromPath(loc.pathname)
//     )

//     // URL이 바뀌면(사이드바 클릭/브라우저 뒤로가기 등) 섹션도 따라오게
//     useEffect(() => {
//         setActiveSection(sectionFromPath(loc.pathname))
//     }, [loc.pathname])

//     const onChangeSection = (key: SectionKey) => {
//         setActiveSection(key)
//         // 옵션: 상단 메뉴 클릭 시 그 섹션의 첫 메뉴로 이동시키고 싶다면
//         const first = SIDEBAR[key]?.[0]
//         if (first) navigate(first.to)
//     }

//     return (
//         <div>
//             <div style={{ display: "flex", padding: 16, gap: 16 }}>
//                 <main style={{ flex: 1 }}>
//                     <Outlet />
//                 </main>
//             </div>
//         </div>
//     )
// }

