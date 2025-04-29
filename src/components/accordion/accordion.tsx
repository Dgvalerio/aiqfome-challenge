'use client';

import { ComponentProps, FC } from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { ChevronDownIcon } from '@/components/icon/chevron-down';
import { cn } from '@/lib/tailwind/utils';

const Accordion: FC<ComponentProps<typeof AccordionPrimitive.Root>> = ({
  ...props
}) => <AccordionPrimitive.Root data-slot="accordion" {...props} />;

const AccordionItem: FC<ComponentProps<typeof AccordionPrimitive.Item>> = ({
  className,
  ...props
}) => (
  <AccordionPrimitive.Item
    data-slot="accordion-item"
    className={cn(
      'border-neutrals-100 mb-1 border-b-4 pb-1 last:border-b-0',
      className
    )}
    {...props}
  />
);

const AccordionTrigger: FC<
  ComponentProps<typeof AccordionPrimitive.Trigger>
> = ({ className, children, ...props }) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      data-slot="accordion-trigger"
      className={cn(
        'focus-visible:border-ring bg-neutrals-0 focus-visible:ring-ring/50 flex flex-1 items-start gap-1 rounded-md px-4 py-3 text-left font-bold transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-neutrals-500 pointer-events-none ml-auto shrink-0 translate-y-0.5 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent: FC<
  ComponentProps<typeof AccordionPrimitive.Content>
> = ({ className, children, ...props }) => (
  <AccordionPrimitive.Content
    data-slot="accordion-content"
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn('pt-0 pb-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
