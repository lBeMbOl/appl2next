"use client"; // Обязательно для клиентских компонентов
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const MyDropdown = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>Меню</DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item>Элемент 1</DropdownMenu.Item>
      <DropdownMenu.Item>Элемент 2</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);
