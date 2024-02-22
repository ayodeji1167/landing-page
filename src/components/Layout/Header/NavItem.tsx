'use client';
import React from 'react';
import Text from '@/components/Ui/chakra/Text';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavItem({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  const pathname = usePathname();
  const isCurrentPath = pathname === link;
  return (
    <Link href={link}>
      <Text
        color={isCurrentPath ? 'primary.300' : 'gray.200'}
        fontWeight={isCurrentPath ? '600' : '400'}
      >
        {name}
      </Text>
    </Link>
  );
}
