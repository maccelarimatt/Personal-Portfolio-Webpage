import classNames from 'classnames';

interface LightboxProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: 'portrait' | 'landscape' | 'wide';
  width?: number;
  height?: number;
  eager?: boolean;
  className?: string;
}

const aspects = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/10]',
};

/** A photograph mounted in a backlit sign frame, with an optional caption plate. */
const Lightbox = ({ src, alt, caption, aspect = 'landscape', width, height, eager, className }: LightboxProps) => (
  <figure className={classNames('m-0 bg-panel p-2', className)}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={classNames('block w-full bg-steel object-cover object-top', aspects[aspect])}
    />
    {caption && (
      <figcaption className="px-1 pb-0.5 pt-2 font-label text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.06em] text-ink-soft">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default Lightbox;
