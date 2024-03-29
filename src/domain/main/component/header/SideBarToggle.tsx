import { useDrawerStore } from "@domain/main/type/DrawerStore";

export default function SideBarToggle() {

    const { switchDrawerOpen } = useDrawerStore();

  return (
      <button className="btn btn-square btn-ghost" onClick={switchDrawerOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
  );
}
