export default function PageTitle(props: { title: string }) {
  return (
    <>
      <p className="md:mb-10 lg:mb-20 text-2xl">{props.title}</p>
    </>
  );
}
