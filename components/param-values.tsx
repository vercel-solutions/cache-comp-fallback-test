import { cacheLife, cacheTag } from "next/cache";
import { Code } from "@/components/code";

type Props = PageProps<"/demo-1/[lang]/[segId]">;

export async function ParamValues({ params }: { params: Props["params"] }) {
  "use cache";
  cacheLife("weeks");

  const _params = await params;

  cacheTag(`post-${_params.lang}-${_params.segId}`);

  return (
    <div>
      <p>
        params:{" "}
        <Code>{`{lang: "${_params.lang}", segId: "${_params.segId}"}`}</Code>
      </p>
    </div>
  );
}

