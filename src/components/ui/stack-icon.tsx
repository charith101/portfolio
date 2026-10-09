import type { CSSProperties } from "react"

import Aws from "~icons/logos/aws"
import Bun from "~icons/logos/bun"
import Dart from "~icons/logos/dart"
import Django from "~icons/logos/django"
import Docker from "~icons/logos/docker-icon"
import Express from "~icons/skill-icons/expressjs-light"
import Firebase from "~icons/logos/firebase"
import Flutter from "~icons/logos/flutter"
import Framer from "~icons/logos/framer"
import Git from "~icons/logos/git-icon"
import Github from "~icons/logos/github-icon"
import Java from "~icons/logos/java"
import Js from "~icons/logos/javascript"
import Kotlin from "~icons/logos/kotlin-icon"
import Mongodb from "~icons/logos/mongodb-icon"
import Mysql from "~icons/logos/mysql-icon"
import Nextjs from "~icons/logos/nextjs-icon"
import Nodejs from "~icons/logos/nodejs-icon"
import Postgres from "~icons/logos/postgresql"
import Pytorch from "~icons/logos/pytorch-icon"
import Python from "~icons/logos/python"
import ReactLogo from "~icons/logos/react"
import Redis from "~icons/logos/redis"
import Spring from "~icons/logos/spring-icon"
import Streamlit from "~icons/logos/streamlit"
import Supabase from "~icons/logos/supabase-icon"
import Tailwind from "~icons/logos/tailwindcss-icon"
import Tensorflow from "~icons/logos/tensorflow"
import TypeScript from "~icons/logos/typescript-icon"
import Vite from "~icons/logos/vitejs"
import Webpack from "~icons/logos/webpack"
import Shadcn from "~icons/simple-icons/shadcnui"

import { cn } from "@/lib/utils"

const icons = {
  js: Js,
  react: ReactLogo,
  typescript: TypeScript,
  tailwindcss: Tailwind,
  vitejs: Vite,
  shadcnui: Shadcn,
  nextjs: Nextjs,
  bunjs: Bun,
  framer: Framer,
  webpack: Webpack,
  nodejs: Nodejs,
  expressjs: Express,
  django: Django,
  python: Python,
  streamlit: Streamlit,
  tensorflow: Tensorflow,
  pytorch: Pytorch,
  java: Java,
  spring: Spring,
  postgresql: Postgres,
  mysql: Mysql,
  mongodb: Mongodb,
  redis: Redis,
  supabase: Supabase,
  firebase: Firebase,
  flutter: Flutter,
  dart: Dart,
  kotlin: Kotlin,
  docker: Docker,
  git: Git,
  github: Github,
  aws: Aws,
} as const

export type StackIconName = keyof typeof icons

const sizeOverrides: Partial<Record<StackIconName, string>> = {
  mongodb: "scale-75",
  framer: "scale-75",
  java: "scale-75",
  flutter: "scale-125",
  firebase: "scale-125",
}

export function StackIcon({
  name,
  className,
  style,
}: {
  name: string
  className?: string
  style?: CSSProperties
}) {
  const Icon = icons[name as StackIconName]
  if (!Icon) {
    console.error(`Icon with name "${name}" not found.`)
    return null
  }
  return (
    <Icon
      className={cn(className, sizeOverrides[name as StackIconName])}
      style={style}
    />
  )
}
