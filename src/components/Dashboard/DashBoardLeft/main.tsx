import { useState, useContext } from "react";
import { ProfileContext } from "components/Providers/ProfileProvider";
import {
  FaAddressBook,
  FaFolderOpen,
  FaGauge,
  FaGear,
  FaQ,
} from "react-icons/fa6";
import { Link, Location, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IconType } from "react-icons/lib";
import AvatarPlaceholder from "images/avatarPlacehoder.svg";

const Avatar = styled.img`
  height: 4.6rem;
  width: 4.6rem;
  margin-top: 1.8rem;
  border-radius: 2.3rem;
`;

type MenuItemType = {
  id: number;
  name: string;
  link: string;
  Icon: IconType;
};

type MenuItemsType = MenuItemType[];
const MenuItems: MenuItemsType = [
  {
    id: 0,
    name: "metrics",
    link: "/dashboard/analytics",
    Icon: FaGauge,
  },
  {
    id: 1,
    name: "contacts",
    link: "/dashboard/contacts",
    Icon: FaAddressBook,
  },
  {
    id: 2,
    name: "reports",
    link: "/dashboard/reports",
    Icon: FaFolderOpen,
  },
];

// start of styled-components
const Container = styled.div`
  padding: 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: white;
`;
const DashboardLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DashboardLogoLink = styled(Link)`
  height: 4.6rem;
  width: 4.6rem;
  background: #eaefec;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface DashboardButtonLinkProps {
  location: Location;
  item: MenuItemType;
}
const DashboardButtonLink = styled(Link)<DashboardButtonLinkProps>`
  height: 4.6rem;
  width: 4.6rem;
  margin-top: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${(props) =>
    props.location.pathname === props.item.link ? "#d6eed1" : "white"};
  border: 3px solid
    ${(props) =>
      props.location.pathname === props.item.link ? "#c6e2c3" : "#eaefec"};
`;
const Divider = styled.hr`
  display: block;
  height: 3px;
  background: #eaefec;
  margin: 4px;
  border: none;
`;
// end of styled-components

function DashBoardLeft() {
  const location = useLocation();
  const [active, setActive] = useState(0);
  const profileValue = useContext(ProfileContext);
  return (
    <Container>
      <DashboardLinkContainer>
        <DashboardLogoLink to="/dashboard/analytics" style={{}}>
          <FaQ
            style={{
              height: "2.5rem",
              width: "2.5rem",
              display: "inline-block",
              color: "#355f44",
            }}
          />
        </DashboardLogoLink>
        {MenuItems.map((e) => {
          return (
            <DashboardButtonLink
              key={e.id}
              to={e.link}
              location={location}
              item={e}
              onClick={() => {
                setActive(e.id);
              }}
            >
              <e.Icon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  display: "inline-block",
                  color: "#355f44",
                }}
              />
            </DashboardButtonLink>
          );
        })}
      </DashboardLinkContainer>
      <div>
        <Divider />
        <DashboardButtonLink
          location={location}
          item={{
            id: 3,
            name: "settings",
            link: "/dashboard/settings",
            Icon: FaGear,
          }}
          to="/dashboard/settings"
          onClick={() => {
            setActive(3);
          }}
        >
          <FaGear
            style={{
              height: "1.5rem",
              width: "1.5rem",
              display: "inline-block",
              color: "#355f44",
            }}
          />
        </DashboardButtonLink>
        <Avatar
          alt="person name"
          src={
            // @ts-expect-error
            profileValue.profile
              ? // @ts-expect-error
                profileValue.profile.data.imageUrl
              : AvatarPlaceholder
          }
        />
      </div>
    </Container>
  );
}

export default DashBoardLeft;
