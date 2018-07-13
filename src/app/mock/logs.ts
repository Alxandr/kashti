import { Log } from '../models/log';

export const LogData = 'waiting\n  time=\"2017-12-23T07:32:07.953924244Z\" level=warning msg=\"could not change group /var/run/docker.sock to docker: group docker not found\"\n  time=\"2017-12-23T07:32:07.955117945Z\" level=warning msg=\"[!] DON\'T BIND ON ANY IP ADDRESS WITHOUT setting --tlsverify IF YOU DON\'T KNOW WHAT YOU\'RE DOING [!]\"\n  time=\"2017-12-23T07:32:07.958649448Z\" level=info msg=\"libcontainerd: started new docker-containerd process\" pid=20\n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"starting containerd\" module=containerd revision=992280e8e265f491f7a624ab82f3e238be086e49 version=v1.0.0-beta.2-53-g992280e8 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"changing OOM score to -500\" module=containerd \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.content.v1.content\"...\" module=containerd type=io.containerd.content.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.snapshotter.v1.btrfs\"...\" module=containerd type=io.containerd.snapshotter.v1 \n  time=\"2017-12-23T07:32:08Z\" level=warning msg=\"failed to load plugin io.containerd.snapshotter.v1.btrfs\" error=\"path /var/lib/docker/containerd/daemon/io.containerd.snapshotter.v1.btrfs must be a btrfs filesystem to be used with the btrfs snapshotter\" module=containerd \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.snapshotter.v1.overlayfs\"...\" module=containerd type=io.containerd.snapshotter.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.metadata.v1.bolt\"...\" module=containerd type=io.containerd.metadata.v1 \n  time=\"2017-12-23T07:32:08Z\" level=warning msg=\"could not use snapshotter btrfs in metadata plugin\" error=\"path /var/lib/docker/containerd/daemon/io.containerd.snapshotter.v1.btrfs must be a btrfs filesystem to be used with the btrfs snapshotter\" module=\"containerd/io.containerd.metadata.v1.bolt\" \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.differ.v1.walking\"...\" module=containerd type=io.containerd.differ.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.containers\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.content\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.diff\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.events\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.healthcheck\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.images\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.namespaces\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.snapshots\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.monitor.v1.cgroups\"...\" module=containerd type=io.containerd.monitor.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.runtime.v1.linux\"...\" module=containerd type=io.containerd.runtime.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.tasks\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.version\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"loading plugin \"io.containerd.grpc.v1.introspection\"...\" module=containerd type=io.containerd.grpc.v1 \n  time=\"2017-12-23T07:32:08Z\" level=info msg=serving... address=\"/var/run/docker/containerd/docker-containerd-debug.sock\" module=\"containerd/debug\" \n  time=\"2017-12-23T07:32:08Z\" level=info msg=serving... address=\"/var/run/docker/containerd/docker-containerd.sock\" module=\"containerd/grpc\" \n  time=\"2017-12-23T07:32:08Z\" level=info msg=\"containerd successfully booted in 0.201631s\" module=containerd \n  time=\"2017-12-23T07:32:08.720748160Z\" level=info msg=\"Graph migration to content-addressability took 0.00 seconds\"\n  time=\"2017-12-23T07:32:08.721075661Z\" level=warning msg=\"Your kernel does not support swap memory limit\"\n  time=\"2017-12-23T07:32:08.721150861Z\" level=warning msg=\"Your kernel does not support cgroup rt period\"\n  time=\"2017-12-23T07:32:08.721179161Z\" level=warning msg=\"Your kernel does not support cgroup rt runtime\"\n  time=\"2017-12-23T07:32:08.722159362Z\" level=info msg=\"Loading containers: start.\"\n  time=\"2017-12-23T07:32:08.815585237Z\" level=warning msg=\"Running modprobe bridge br_netfilter failed with message: ip: can\'t find device \'bridge\'\\nbridge                126976  1 br_netfilter\\nstp                    16384  1 bridge\\nllc                    16384  2 bridge,stp\\nip: can\'t find device \'br_netfilter\'\\nbr_netfilter           24576  0 \\nbridge                126976  1 br_netfilter\\nmodprobe: can\'t change directory to \'/lib/modules\': No such file or directory\\n, error: exit status 1\"\n  time=\"2017-12-23T07:32:08.838261755Z\" level=warning msg=\"Running modprobe nf_nat failed with message: \\`ip: can\'t find device \'nf_nat\'\\nnf_nat_masquerade_ipv4    16384  1 ipt_MASQUERADE\\nnf_nat_ipv4            16384  1 iptable_nat\\nnf_nat                 24576  3 xt_nat,nf_nat_masquerade_ipv4,nf_nat_ipv4\\nnf_conntrack          106496  6 nf_conntrack_netlink,nf_nat_masquerade_ipv4,nf_conntrack_ipv4,nf_nat_ipv4,xt_conntrack,nf_nat\\nmodprobe: can\'t change directory to \'/lib/modules\': No such file or directory\\`, error: exit status 1\"\n  time=\"2017-12-23T07:32:08.867561078Z\" level=warning msg=\"Running modprobe xt_conntrack failed with message: \\`ip: can\'t find device \'xt_conntrack\'\\nxt_conntrack           16384  1 \\nnf_conntrack          106496  6 nf_conntrack_netlink,nf_nat_masquerade_ipv4,nf_conntrack_ipv4,nf_nat_ipv4,xt_conntrack,nf_nat\\nx_tables               36864 15 xt_statistic,ebt_ip,xt_nat,xt_recent,ipt_REJECT,xt_tcpudp,xt_mark,xt_comment,ebtables,ipt_MASQUERADE,xt_addrtype,iptable_filter,xt_conntrack,iptable_security,ip_tables\\nmodprobe: can\'t change directory to \'/lib/modules\': No such file or directory\\`, error: exit status 1\"\n  time=\"2017-12-23T07:32:10.052014831Z\" level=info msg=\"Default bridge (docker0) is assigned with an IP address 172.17.0.0/16. Daemon option --bip can be used to set a preferred IP address\"\n  time=\"2017-12-23T07:32:10.580463956Z\" level=info msg=\"Loading containers: done.\"\n  time=\"2017-12-23T07:32:10.661371521Z\" level=info msg=\"Docker daemon\" commit=1caf76c graphdriver(s)=overlay2 version=17.11.0-ce\n  time=\"2017-12-23T07:32:10.661867721Z\" level=info msg=\"Daemon has completed initialization\"\n  time=\"2017-12-23T07:32:10.727635374Z\" level=info msg=\"API listen on [::]:2375\"\n  time=\"2017-12-23T07:32:10.727796775Z\" level=info msg=\"API listen on /var/run/docker.sock\"\n  PID   USER     TIME   COMMAND\n      1 root       0:00 /bin/sh /hook/main.sh\n      6 root       0:00 dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375\n     20 root       0:00 docker-containerd --config /var/run/docker/containerd/containerd.toml\n    122 root       0:00 ps -ef\n  Client:\n   Version:      17.11.0-ce\n   API version:  1.34\n   Go version:   go1.8.3\n   Git commit:   1caf76c\n   Built:        Mon Nov 20 18:32:34 2017\n   OS/Arch:      linux/amd64\n  \n  Server:\n   Version:      17.11.0-ce\n   API version:  1.34 (minimum version 1.12)\n   Go version:   go1.8.5\n   Git commit:   1caf76c\n   Built:        Mon Nov 20 18:39:28 2017\n   OS/Arch:      linux/amd64\n   Experimental: false\n  time=\"2017-12-23T07:32:28.012819280Z\" level=info msg=\"Processing signal \'terminated';
