import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User as HeroUser,
} from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuLogOut, LuUserRound } from 'react-icons/lu';

import { getProfile, userLogout } from '@/actions/auth.action';

export default function User() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: 'User Name',
    email: 'user email',
    picture: '',
  });

  const fetchProfile = async () => {
    const profile = await getProfile();
    setProfile(profile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="border-primary-300 rounded-full border-2 p-[2px]">
          <Avatar
            showFallback
            src={''}
            classNames={{
              base: 'bg-primary-300',
            }}
            className="cursor-pointer"
            fallback={<LuUserRound className="text-2xl text-white" />}
          />
        </div>
      </DropdownTrigger>
      <DropdownMenu disabledKeys={['profile']}>
        <DropdownSection>
          <DropdownItem key="profile" className="opacity-100">
            <HeroUser
              avatarProps={{
                size: 'md',
                src: profile?.picture || '',
                fallback: <LuUserRound className="text-2xl text-white" />,
              }}
              classNames={{
                name: 'text-default-600',
                description: 'text-default-500',
              }}
              description={profile?.email || 'user email'}
              name={profile?.name || 'User Name'}
            />
          </DropdownItem>
        </DropdownSection>
        <DropdownSection className="gap-2">
          <DropdownItem
            as={Link}
            href="/dashboard/change-password"
            key="change-password"
            startContent={<LuUserRound />}
          >
            Change Password
          </DropdownItem>
          <DropdownItem
            key="logout"
            onPress={() => {
              userLogout();
              router.push('/login');
            }}
            className="text-danger"
            color="danger"
            startContent={<LuLogOut />}
          >
            logout
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
