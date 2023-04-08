import { FullScreenHandle } from 'hooks';

export interface FullScreenProps {
  handle: FullScreenHandle;
  children: any;
  onChange?: (state: boolean, handle: FullScreenHandle) => void;
  className?: string;
}

export const withFullScreen = ({
  handle,
  // onChange,
  children,
  className,
}: FullScreenProps) => {
  const classNames = [];
  if (className) {
    classNames.push(className);
  }

  classNames.push('fullscreen');

  if (handle.active) {
    classNames.push('fullscreen-enabled');
  }

  // useEffect(() => {
  //   if (onChange) {
  //     onChange(handle.active, handle);
  //   }
  // }, [handle.active]);

  return (
    <div
      className={classNames.join(' ')}
      ref={handle.node}
      style={handle.active ? { height: '100%', width: '100%' } : undefined}
    >
      {children}
    </div>
  );
};
