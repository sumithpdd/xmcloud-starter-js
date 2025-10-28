import {
  Text,
  RichText,
  Image,
  type ImageField,
  type Field,
  } from "@sitecore-content-sdk/nextjs"
  import type { ComponentProps } from "@/lib/component-props"
type ExampleProps = ComponentProps & {
  fields: {
    heading: Field<string>
    content: Field<string>
    image: ImageField
  }
}

const Example = (props: ExampleProps): JSX.Element => {
  return (
    <div className="p-8">
      {props.fields?.heading && (
        <h2 className="text-3xl font-bold mb-4">
          <Text field={props.fields.heading} />
        </h2>
      )}

      {props.fields?.content && (
        <div className="prose mb-6">
          <RichText field={props.fields.content} />
        </div>
      )}

      {props.fields?.image && <Image field={props.fields.image} className="rounded-lg shadow-lg" />}
    </div>
  )
}

export default Example
