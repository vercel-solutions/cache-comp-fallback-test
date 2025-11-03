import { Code } from "@/components/code";

type Props = PageProps<"/demo-1/[lang]/[segId]">;

export async function ParamValues({ params }: { params: Props["params"] }) {
  const _params = await params;

  return (
    <div>
      <p>
        params:{" "}
        <Code>{`{lang: "${_params.lang}", segId: "${_params.segId}"}`}</Code>
      </p>
    </div>
  );
}
