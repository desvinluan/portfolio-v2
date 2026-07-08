import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

const CustomItem = ({
  title,
  description,
  variant = "outline",
  size = "default",
}) => {
  return (
    <Item variant={variant} size={size}>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
    </Item>
  );
};

export default CustomItem;