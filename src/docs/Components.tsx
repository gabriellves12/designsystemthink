import { useState } from "react";
import { Section, Subhead, Demo, Caption } from "./primitives";
import {
  Button,
  Input,
  Textarea,
  Field,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tooltip,
  Avatar,
  AvatarGroup,
  Alert,
  Progress,
  Spinner,
  Skeleton,
  Separator,
  Kbd,
  Modal,
  ModalActions,
} from "@/components";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 9v4.5M10 6.5h.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Components() {
  const [progress, setProgress] = useState(64);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Section
      id="components"
      index="05"
      title="Components"
      description="Accessible, composable building blocks — variant-driven, theme-aware, and dependency-light. Every control here is keyboard navigable and wired to the token layer."
    >
      {/* Buttons */}
      <Subhead>Buttons</Subhead>
      <Demo>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="link">Link</Button>
      </Demo>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Demo className="flex-1">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">
            Large <ArrowIcon />
          </Button>
        </Demo>
        <Demo className="flex-1">
          <Button loading>Saving</Button>
          <Button disabled>Disabled</Button>
          <Button variant="secondary" size="icon" aria-label="Info">
            <InfoIcon />
          </Button>
        </Demo>
      </div>

      {/* Badges */}
      <Subhead>Badges</Subhead>
      <Demo>
        <Badge variant="solid">Solid</Badge>
        <Badge variant="soft">Soft</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success" dot>
          Live
        </Badge>
        <Badge variant="warning">Beta</Badge>
        <Badge variant="danger">Error</Badge>
        <Badge variant="info">Info</Badge>
      </Demo>

      {/* Form controls */}
      <Subhead>Form controls</Subhead>
      <Demo center={false} className="grid gap-6 md:grid-cols-2">
        <Field label="Email" hint="We'll never share it.">
          {(p) => <Input type="email" placeholder="you@think.design" {...p} />}
        </Field>
        <Field label="Password" error="Must be at least 8 characters." required>
          {(p) => <Input type="password" defaultValue="abc" {...p} />}
        </Field>
        <Field label="Role">
          {(p) => (
            <Select {...p} defaultValue="designer">
              <option value="designer">Designer</option>
              <option value="engineer">Engineer</option>
              <option value="pm">Product Manager</option>
            </Select>
          )}
        </Field>
        <Field label="Message" hint="Markdown supported.">
          {(p) => <Textarea placeholder="Tell us what you think…" {...p} />}
        </Field>
      </Demo>

      {/* Toggles */}
      <Subhead>Selection & toggles</Subhead>
      <Demo center={false} className="grid gap-8 sm:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Caption>Switch</Caption>
          <label className="flex items-center gap-3 text-sm">
            <Switch defaultChecked /> Notifications
          </label>
          <label className="flex items-center gap-3 text-sm">
            <Switch size="sm" /> Compact mode
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <Caption>Checkbox</Caption>
          <label className="flex items-center gap-3 text-sm">
            <Checkbox defaultChecked /> Auto-save
          </label>
          <label className="flex items-center gap-3 text-sm">
            <Checkbox /> Send weekly digest
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <Caption>Radio</Caption>
          <RadioGroup>
            <label className="flex items-center gap-3 text-sm">
              <Radio name="plan" defaultChecked /> Monthly
            </label>
            <label className="flex items-center gap-3 text-sm">
              <Radio name="plan" /> Annual
            </label>
          </RadioGroup>
        </div>
      </Demo>

      {/* Cards */}
      <Subhead>Cards</Subhead>
      <div className="grid gap-5 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Elevated</CardTitle>
            <CardDescription>
              The default surface, lifted with a soft neutral shadow.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge variant="soft">v1.0</Badge>
              <Badge variant="success" dot>
                Stable
              </Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Open</Button>
            <Button size="sm" variant="ghost">
              Dismiss
            </Button>
          </CardFooter>
        </Card>
        <Card variant="outline" interactive>
          <CardHeader>
            <CardTitle>Interactive</CardTitle>
            <CardDescription>
              Hover me — outline cards lift gently on interaction.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AvatarGroup>
              <Avatar fallback="TK" />
              <Avatar fallback="DS" />
              <Avatar fallback="+5" />
            </AvatarGroup>
          </CardContent>
        </Card>
        <Card variant="sunken">
          <CardHeader>
            <CardTitle>Sunken</CardTitle>
            <CardDescription>
              An inset surface for nested or secondary content.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Progress value={progress} />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setProgress((p) => Math.max(0, p - 10))}
              >
                −10
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setProgress((p) => Math.min(100, p + 10))}
              >
                +10
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Subhead>Tabs</Subhead>
      <Demo center={false}>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specs</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="text-sm leading-relaxed text-fg-muted">
              Tabs organize content into switchable panels. Fully keyboard
              accessible with proper ARIA roles.
            </p>
          </TabsContent>
          <TabsContent value="specs">
            <p className="text-sm leading-relaxed text-fg-muted">
              Built on a lightweight context — controlled or uncontrolled,
              your choice.
            </p>
          </TabsContent>
          <TabsContent value="usage">
            <p className="text-sm leading-relaxed text-fg-muted">
              Press <Kbd>Tab</Kbd> to focus, <Kbd>Enter</Kbd> to activate.
            </p>
          </TabsContent>
        </Tabs>
      </Demo>

      {/* Alerts */}
      <Subhead>Alerts</Subhead>
      <div className="flex flex-col gap-3">
        <Alert variant="info" icon={<InfoIcon />} title="Heads up">
          This design system is the foundation for building with Claude Design.
        </Alert>
        <Alert variant="success" icon={<InfoIcon />} title="Deployed">
          Your changes are live across all environments.
        </Alert>
        <Alert variant="danger" icon={<InfoIcon />} title="Action needed">
          Two tokens failed contrast validation in light mode.
        </Alert>
      </div>

      {/* Feedback */}
      <Subhead>Feedback & overlays</Subhead>
      <Demo>
        <Tooltip content="Refined & minimal">
          <Button variant="secondary">Hover for tooltip</Button>
        </Tooltip>
        <Button onClick={() => setModalOpen(true)}>Open modal</Button>
        <Spinner />
        <Badge variant="outline">
          <Kbd>⌘</Kbd> <Kbd>K</Kbd>
        </Badge>
      </Demo>

      <div className="mt-4">
        <Demo center={false} className="flex flex-col gap-3">
          <Caption>Skeleton</Caption>
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-3.5 w-1/3" />
              <Skeleton className="h-3 w-2/3" />
            </div>
          </div>
        </Demo>
      </div>

      <div className="mt-6">
        <Separator label="that's the system" />
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Ship with confidence"
        description="Modals trap focus, lock scroll, and close on Escape or backdrop click — all dependency-free."
        footer={
          <ModalActions
            onCancel={() => setModalOpen(false)}
            onConfirm={() => setModalOpen(false)}
            confirmLabel="Got it"
          />
        }
      >
        <p className="text-fg-muted">
          Every primitive in Think composes from the same token layer, so a
          product built on it stays coherent from the first button to the last
          dialog.
        </p>
      </Modal>
    </Section>
  );
}
