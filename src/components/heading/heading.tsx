interface Props {
  heading: string;
}

export const Heading = ({ heading }: Props) => {
  return (
    <header>
      <h1>{heading}</h1>
    </header>
  );
};
