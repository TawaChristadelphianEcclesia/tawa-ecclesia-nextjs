import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import { getHeaderData, IHeaderData } from "../lib/headerFooter";

const NavLink: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm block text-gray-500 rounded-sm transition-all cursor-pointer">
      {children}
    </a>
  </Link>
);
const Header = ({ headerData }: { headerData: IHeaderData }) => {
  const [open, setOpen] = useState(false);
  return (
    <header tw="sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center shadow">
      <div tw="flex items-center justify-between px-4 py-2 sm:p-0">
        <div tw="flex items-center">
          {/* <img src={LogoBible} tw="h-12 m-0 p-0 px-2" alt="bible logo" /> */}
          <div tw="h-12 w-12 m-0 p-0 mx-2 relative">
            <Image
              src={headerData.siteLogo.src}
              alt={headerData.siteLogo.alt}
              sizes="100%"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href="/" passHref>
            <a tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 px-4 py-2 block text-gray-900 rounded text-2xl font-semibold transition-all">
              <h1>{headerData.siteTagLine}</h1>
            </a>
          </Link>
        </div>
        <div tw="sm:hidden">
          <button
            type="button"
            aria-label="expand menu"
            tw="block text-gray-400 hover:text-gray-900 focus:text-gray-900 transition-all focus:outline-none rounded focus:ring focus:ring-blue-300"
            onClick={() => setOpen(!open)}
          >
            <svg tw="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!open && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        tw="px-4 pt-2 pb-4 sm:flex sm:p-0 transition-all"
        css={[open ? tw`block` : tw`hidden`]}
      >
        <NavLink href="/articles">Articles</NavLink>
        <NavLink href="/articles/who-are-we">Who Are We?</NavLink>
        <NavLink href="/articles/gods-purpose-with-the-earth">
          Our Beliefs
        </NavLink>
      </div>
    </header>
  );
};
export default Header;

// export const getStaticProps: GetStaticProps = async () => {
//   // const headerData = await getHeaderData();
//   const headerData = {
//     siteTagLine: "Tawa Christadelphian Ecclesia",
//     siteLogo: {
//       src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICB4PSIwcHgiCiAgIHk9IjBweCIKICAgdmlld0JveD0iMCAwIDkzLjQ0MzQ5NyA4NC4xMzYwNyIKICAgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgaWQ9InN2Zzg1MyIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibm91bl9iaWJsZV8xMTg5NTcwLnN2ZyIKICAgd2lkdGg9IjkzLjQ0MzQ5NyIKICAgaGVpZ2h0PSI4NC4xMzYwNyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wLjEgKDNiYzJlODEzZjUsIDIwMjAtMDktMDcpIj48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4NTkiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj48ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD48ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgICAgaWQ9ImRlZnM4NTciIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiCiAgICAgaWQ9Im5hbWVkdmlldzg1NSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iNC41MzExNDAzIgogICAgIGlua3NjYXBlOmN4PSIxMi41NzI4ODEiCiAgICAgaW5rc2NhcGU6Y3k9IjUwLjM4Njk1NSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNDgxNiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjE1MSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2Zzg1MyIgLz48cGF0aAogICAgIGZpbGw9IiMwMDAwMDAiCiAgICAgZD0ibSA5My4zODU3NjMsNzIuOTM2MDY4IGMgMCwtMC42IDAsLTEuMSAwLC0xLjcgMCwtNS43IDAsLTExLjUgMCwtMTcuMyAwLC0xMS41IDAsLTIzLjQgMCwtMzQuNiAwLC0wLjIgMCwtMC41IDAsLTAuOCAwLjEsLTEuNCAwLjIsLTMuNSAtMS41LC00LjQgLTAuNywtMC40IC0xLjUsLTAuNSAtMi4xLC0wLjUgLTAuMywwIC0wLjYsMCAtMC45LDAgLTAuMiwwIC0wLjQsMCAtMC42LDAgMCwwIC0wLjEsMCAtMC4xLDAgLTAuMSwwIC0wLjIsMCAtMC4zLDAgdiAtNC43IGMgMCwtMC41IC0wLjIsLTEuMSAtMC42LC0xLjQgLTAuNCwtMC40IC0xLC0wLjYgLTEuNSwtMC41IC0xLjEsMC4xIC0xLjgsMC4xIC0yLjksMCAtMC4yLDAgLTAuMywwIC0wLjUsMCAwLC0xLjcgLTAuMSwtMy41IC0wLjEsLTUuMiAwLC0wLjYgLTAuMywtMS4xMDAwMDAwMiAtMC43LC0xLjQwMDAwMDAyIC0wLjQsLTAuNCAtMSwtMC41IC0xLjUsLTAuNCAtNS45LDAuOCAtMTIuNiwxLjkwMDAwMDAyIC0xOC4zLDQuMTAwMDAwMDIgLTIuNywwLjggLTQuNSwxLjMgLTkuMiwzLjYgLTAuMSwwIC0wLjEsMC4xIC0wLjIsMC4xIC0wLjYsMC40IC0xLjMsMC43IC0yLDEgLTEuMiwwLjYgLTIuNSwxLjIgLTMuNiwyLjIgLTAuMSwtMC4xIC0wLjIsLTAuMSAtMC4zLC0wLjIgLTkuMywtNSAtMzIuMiwtMTAuMjAwMDAwMDIgLTMzLjgsLTEwLjIwMDAwMDAyIC0xLDAgLTEuNSwwLjYwMDAwMDAyIC0xLjcsMC45MDAwMDAwMiAtMC4yLDAuMyAtMC4zLDAuNyAtMC4zLDEuMSB2IDQuNCBjIDAsMCAtMC4xLDAgLTAuMSwwIC0wLjUsMCAtMS4wOTk5OTk5LDAgLTEuNzk5OTk5OSwwIC0wLjQsMCAtMC44LDAgLTEuMSwwIGggLTAuNSBjIC0xLjEsMCAtMS45LDAuOSAtMS45LDIgdiA0LjYgYyAtMC4yLDAgLTAuMywwIC0wLjUsMCAtMC45LDAgLTIuNCwwLjIgLTMuMSwwLjMgLTAuODk5OTk5OTYsMC4yIC0xLjQ5OTk5OTk2LDEgLTEuNDk5OTk5OTYsMS45IDAsOS4yIDAsMTguOCAwLDI4LjEgMCwxMC4yIDAsMjAuOCAwLDMwLjkgMCwwLjIgMCwwLjUgMCwwLjggLTAuMywxLjMgLTAuNCwzLjMgMC45OTk5OTk5Niw0LjMgMC43LDAuNyAxLjcsMSAyLjksMSAwLjgsMCAxLjYsLTAuMSAyLjIsLTAuMiAwLjMsMCAwLjYsLTAuMSAwLjksLTAuMSAzLjU5OTk5OTksLTAuMyA3LjE5OTk5OTksLTAuNSAxMC43OTk5OTk5LC0wLjUgNy45LDAgMTUuMywwLjggMjEuNSwyLjQgMC42LDAuMSAxLjIsMC40IDEuOCwwLjYgMSwwLjQgMi4xLDAuOCAzLjIsMC45IDAuNSwwLjEgMSwwLjEgMS41LDAuMSAyLjEsMCAzLjgsLTAuNSA1LjQsLTEgMC42LC0wLjIgMS4yLC0wLjQgMS44LC0wLjUgNi4yLC0xLjYgMTMuNiwtMi40IDIxLjMsLTIuNCAzLjYsMCA3LjIsMC4yIDEwLjgsMC41IDAuMywwIDAuNSwwLjEgMC44LDAuMSAwLjgsMC4xIDEuNywwLjIgMi42LDAuMiAxLDAgMS44LC0wLjEgMi42LC0wLjQgMC42LC0wLjIgMSwtMC42IDEuMiwtMS4yIDEuMSwtMi4zIDEsLTQuNCAwLjksLTYuNSB6IG0gLTQ1LjksLTU5LjkgYyAxLjUsLTEuNyA0LC0yLjMgNS45LC0zLjUgMC42LDUuNSAwLjEsMTIgMC4yLDE3LjkgMS42LC0wLjUgMi43LC0zLjYgNC43LC00LjUgMS4yLDEuNyAyLjUsMy4zIDQsNC43IDAsLTcuMiAwLC0xNC41IDAsLTIxLjcgNS4zLC0yIDExLjUsLTMuMSAxNy45LC00IDAuNiwyMC4yIDAuMSw0MS41IDAuMiw2Mi4xIC0xMy4xLDEuMSAtMjQsNS43IC0zMywxMC4xIDAuMSwtMjAuNCAwLjEsLTQwLjggMC4xLC02MS4xIHogbSAtMzQuOSwtMTAuNCBjIC0wLjIsLTAuNCAyMy43LDQuOSAzMyw5LjkgMCwyMC41IDAsNDAuOSAwLDYxLjQgLTAuNSwwLjcgLTEuMiwtMC4zIC0xLjQsLTAuNSAtOC44LC00LjMgLTE5LjMsLTguNCAtMzEuNiwtOS40IDAsLTIwLjUgMCwtNDEgMCwtNjEuNCB6IG0gLTUuMzk5OTk5OSw2LjMgYyAxLjEsMCAyLjYsMCAzLjQ5OTk5OTksMCAtMC4xLDEuMiAtMC4xLDM5IDAuMSw1Ni42IDEyLjUsMS4zIDIyLjYsNC4xIDMyLjEsOS4yIDEuNCwwLjggMi44LDEuOSAzLjgsMS45IDEuNSwwIDYuNCwtMy4xIDgsLTMuOCA4LjMsLTMuNyAxNi43LC02LjUgMjcuOCwtNy4xIDAuMSwtMTguOCAtMC40LC0zOC4yIDAuMiwtNTYuOCAxLjEsMC4xIDIsMC4xIDMuMywwIDAsMjAuNSAwLDQwLjkgMCw2MS40IC0xMi40LC0wLjMgLTIxLjIsMS4zIC0zMC43LDQuMiAtMi45LDAuOSAtNS45LDMgLTguNSwzLjEgLTEuNCwwIC0yLjgsLTAuNyAtNC41LC0xLjQgLTEwLjIsLTQgLTIwLjgsLTYuMiAtMzUuMTk5OTk5OSwtNS45IDAuMSwtMjAuNSAwLjEsLTQwLjkgMC4xLC02MS40IHogbSA4NC4xOTk5OTk5LDYyLjMgYyAwLDIuNSAwLjQsNSAtMC41LDcuMyAtMS43LDAuNSAtMy41LDAuMiAtNS4yLDAgLTExLC0xLjEgLTIzLC0wLjYgLTMyLjgsMS45IC0yLjYsMC43IC00LjcsMS44IC04LDEuNCAtMS41LC0wLjIgLTMuMSwtMSAtNC43LC0xLjQgLTkuNSwtMi40IC0yMS42LC0zIC0zMi45OTk5OTk5LC0xLjkgLTEuNSwwLjEgLTMuOCwwLjggLTQuNywtMC4yIC0wLjksLTAuNCAtMC41LC0yLjQgLTAuNSwtMy41IC0wLjEsLTE5LjEgMC4xLC0zOS42IDAsLTU5IDAuOCwtMC4yIDIuOSwtMC40IDMuMywtMC4yIDAsMTguOSAwLDM3LjggMCw1Ni42IDE1LjE5OTk5OTksLTAuNiAyNS44OTk5OTk5LDEuOCAzNi43OTk5OTk5LDYuMSAxLjUsMC42IDMuNSwxLjYgNC41LDEuNyAxLDAgMi45LC0xIDQuNSwtMS43IDEwLjQsLTQuMSAyMS40LC02LjcgMzYuNiwtNi4xIDAuNiwtMTguNSAwLjEsLTM3LjcgMC4yLC01Ni42IDAuNywwLjIgMi40LC0wLjMgMy4xLDAuMiAwLjksMC40IDAuNSwyLjQgMC41LDMuNSAwLDE2LjggLTAuMSwzNC44IC0wLjEsNTEuOSB6IgogICAgIGlkPSJwYXRoODQ3IiAvPjwvc3ZnPgo=",
//       alt: "open bible logo",
//     },
//   };
//   return {
//     props: {
//       headerData,
//     },
//   };
// };
