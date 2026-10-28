// 메뉴를 클릭하면 연결된 영역으로 부드럽게 이동합니다.
const link = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#") || href === "#") return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
};

export default link;
